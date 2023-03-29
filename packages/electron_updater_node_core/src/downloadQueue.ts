import { createHash } from "crypto";
import { createWriteStream, existsSync, readFileSync, rename } from "fs";
import { createGunzip } from "zlib";
import { hash256 } from "./functions";
import { DownloadFn } from "./type";

// 定义下载任务类型
type DownloadTask = () => Promise<boolean>;

export default class DownloadQueue {
    private tasks: DownloadTask[] = [];
    private isDownloading = false;

    // 添加下载任务方法
    public addTask (task: DownloadTask) {
      if (typeof task !== "function") {
        throw new TypeError("Task must be a function!");
      }
      this.tasks.push(task);
      // 没有在下载的话就开始下载
      if (!this.isDownloading) {
        this.isDownloading = true;
        this.download();
      }
    }

    /**
     * 下载gzip文件
     *
     * @param {string} sourceHash 文件hash
     * @param {string} sourceUrl 文件url
     * @param {string} targetPath 文件存放位置
     * @param {DownloadFn} downloadFn 下载工具
     * @return {*}  {Promise<boolean>}
     */
    public downAndungzip (
      sourceHash: string,
      sourceUrl: string,
      targetPath: string,
      downloadFn: DownloadFn
    ): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const tempFilePath = `${targetPath}.tmp`;
        // 防止多次下载
        if (existsSync(targetPath) && hash256(readFileSync(targetPath)) === sourceHash) {
          resolve(true);
        } else {
          const hash = createHash("sha256");
          const ungz = createGunzip();
          const writeStream = createWriteStream(tempFilePath);
          downloadFn(sourceUrl).then(
            (response) => {
              response.pipe(ungz);
            },
            (err) => {
              reject(err);
            }
          );
          ungz.on("error", (err) => {
            ungz.close();
            writeStream.close();
            hash.destroy();
            reject(err);
          });
          ungz.on("data", (chunk) => {
            hash.write(chunk);
            writeStream.write(chunk);
          });
          ungz.on("end", () => {
            if (hash.digest("hex") !== sourceHash) {
              hash.destroy();
              reject(new Error("下载文件出错"));
            } else {
              writeStream.on("finish", () => {
                rename(tempFilePath, targetPath, (err) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(true);
                  }
                });
              });
              writeStream.end();
            }
          });
        }
      });
    }

    // 下载任务方法
    private download () {
      const task = this.tasks.shift();
      if (task) {
        task().then(() => {
          this.download();
        });
      } else {
        this.isDownloading = false;
      }
    }
}
