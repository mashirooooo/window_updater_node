import { gt } from "semver";
import { join, dirname } from "path";
import {
  DiffVersionHashResult,
  DownloadFn,
  HashedFolder,
  HashedFolderAndFileType,
  HashElementOptions,
  UpdateInfo,
  UpdateJson
} from "./type";
import {
  checkFileExitAndHash,
  diffVersionHash,
  handleHashedFolderChildrenToObject,
  hashElement,
} from "./functions";
import { existsSync, mkdirSync } from "fs";
import { spawn } from "child_process";
import DownloadQueue from "./downloadQueue";

export class UpdateElectron {
  downloadQueue = new DownloadQueue();

  /**
   *
   * @param {string} updaterName  更新updater名称
   * @param {string} version  当前版本号
   * @param {string} exePath 当前exe路径 app.getPath('exe')
   * @param {string} tempDirectory  临时目录
   * @param {string} updateConfigName  更新配置文件名称
   * @param {UpdateJson} updateJson  更新配置文件
   * @param {string} baseUrl  更新下载gzip的基本地址 `${url}/${gzipDirectory}${version}`
   * @param {DownloadFn} downloadFn  下载函数
   * @param {HashElementOptions} [options={files: {}}] 通过option 配置文件排除文件文件夹或指定后缀folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },files: { exclude: ['*.js', '*.json'] },
   */
  constructor (
    public statusCallback: (res: UpdateInfo) => void,
    public updaterName: string,
    public version: string,
    public exePath: string,
    public tempDirectory: string,
    public updateConfigName: string,
    public updateJson: UpdateJson,
    public baseUrl: string,
    public downloadFn: DownloadFn,
    public options: HashElementOptions = {
      files: {}
    }
  ) {
    this.__diffResult = undefined;
  }

  /**
   * 检查当前版本是否需要更新
   */
  async checkForUpdates (): Promise<boolean> {
    try {
      if (gt(this.updateJson.version, this.version)) {
        const dirDirectory = dirname(this.exePath);
        const hash = hashElement(dirDirectory, this.options);
        handleHashedFolderChildrenToObject(hash as HashedFolderAndFileType);
        // 缓存result
        const diffResult = diffVersionHash(
          hash as HashedFolderAndFileType,
          this.updateJson.hash as HashedFolder
        );
        if (diffResult && diffResult.added.concat(diffResult.changed).length > 0) {
          this.__diffResult = Object.freeze(diffResult);
        }
        return !!this.__diffResult;
      }
      return false;
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
      console.log("checkForUpdates", error);
      return false;
    }
  }

  /**
   * diffResult
   *
   * @private
   * @type {(DiffVersionHashResult | undefined)}
   * @memberof UpdateElectron
   */
  private __diffResult: DiffVersionHashResult | undefined;

  /**
   * 下载差异包到本地
   * @param diffResult
   */
  async downloadUpdate (): Promise<boolean> {
    if (this.__diffResult) {
      try {
        if (!existsSync(this.tempDirectory)) {
          mkdirSync(this.tempDirectory);
        }
        if (!this.baseUrl.endsWith("/")) {
          this.baseUrl += "/";
        }
        this.statusCallback({
          message: {
            changed: this.__diffResult.changed.map(i => i.hash),
            added: this.__diffResult.added.map(i => i.hash),
            msg: "findDifferentElements"
          },
          status: "init"
        });
        const r: Promise<boolean> = new Promise((resolve, reject) => {
          this.downloadQueue.downLoadFinnishCallBack(() => {
            resolve(true);
          });
          // 不会未定义
          this.__diffResult!.added.concat(this.__diffResult!.changed).forEach(i => {
            const fileName = `${this.baseUrl}${i.hash}.gz`;
            this.downloadQueue.addTask({
              task: () => {
                return this.downloadQueue.downAndungzip(
                  i.hash,
                  fileName,
                  join(this.tempDirectory, i.hash),
                  this.downloadFn
                );
              },
              finnishCallBack: (status: boolean) => {
                // todo 下载失败回调 成功回调
              }
            });
          });
        });
        return r;
      } catch (error) {
        this.statusCallback({
          message: error,
          status: "failed"
        });
        console.log("downloadUpdate", error);
        return false;
      }
    } else {
      this.statusCallback({
        message: "程序无须更新",
        status: "failed"
      });
      return false;
    }
  }

  /**
   * 安装
   *
   * @param force 是否强制安装,强制安装的话不会检查本地的差异包是否完整
   * @returns {Promise<boolean>} false为无法执行安装
   */
  async install (force: boolean = false): Promise<boolean | undefined> {
    try {
      let is = true;
      if (force) {
        is = force;
      } else {
        const isDiff = await this.validateDiffPackageIntegrity();
        if (!isDiff) {
          this.statusCallback({
            message: "Installation check difference failed",
            status: "failed"
          });
          return false;
        }
      }
      if (is) {
        const child = spawn(this.updaterName, {
          detached: true,
          env: {
            exe_path: this.exePath,
            update_temp_path: this.tempDirectory,
            update_config_file_name: this.updateConfigName + ".json",
            exe_pid: process.pid.toString()
          },
          stdio: "ignore"
        });

        child.stdout?.on("data", (data) => {
          this.statusCallback({
            message: {
              data: JSON.stringify(data),
              msg: "child.stdout data"
            },
            status: "init"
          });
        });

        child.stdout?.on("close", () => {
          this.statusCallback({
            message: "child.stdout close",
            status: "init"
          });
        });

        return true;
      }
      return false;
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
    }
  }

  /**
   * 检查本地和远程差异包是否有不一样
   *
   * @returns {Promise<boolean>} 如果有差异返回的是true
   */
  private async validateDiffPackageIntegrity (): Promise<boolean> {
    if (this.__diffResult) {
      for (const item of this.__diffResult.changed) {
        const path = `${this.tempDirectory}/${item.hash}`;
        const checkFileResult = await checkFileExitAndHash(path, item.hash);
        if (!checkFileResult) {
          return true;
        }
      }
      for (const item of this.__diffResult.added) {
        const path = `${this.tempDirectory}/${item.hash}`;
        const checkFileResult = await checkFileExitAndHash(path, item.hash);
        if (!checkFileResult) {
          return true;
        }
      }
    }
    return false;
  }
}
