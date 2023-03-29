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
  diffVersionHash,
  findDifferentElements,
  getLocalDifferenceFileName,
  handleHashedFolderChildrenToObject,
  hashElement,
  hasSameElement,
  unique
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
  ) {}

  /**
   * 检查当前版本是否需要更新
   */
  checkForUpdates (): DiffVersionHashResult | undefined {
    try {
      if (gt(this.updateJson.version, this.version)) {
        const dirDirectory = dirname(this.exePath);
        const hash = hashElement(dirDirectory, this.options);
        handleHashedFolderChildrenToObject(hash as HashedFolderAndFileType);
        const diffResult = diffVersionHash(
            hash as HashedFolderAndFileType,
            this.updateJson.hash as HashedFolder
        );
        return diffResult;
      }
      return undefined;
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
      console.log("checkForUpdates", error);
    }
  }

  /**
   * 下载差异包到本地
   * @param diffResult
   */
  async downloadUpdate (diffResult: DiffVersionHashResult) {
    try {
      if (!existsSync(this.tempDirectory)) {
        mkdirSync(this.tempDirectory);
      }
      if (!this.baseUrl.endsWith("/")) {
        this.baseUrl += "/";
      }
      const changed = diffResult.changed.map((v) => v.hash);
      const added = diffResult.added.map((v) => v.hash);
      let tempFileHash: string[] = [];
      try {
        tempFileHash = await getLocalDifferenceFileName(this.tempDirectory);
      } catch (error) {
        console.log("Get local difference packages", error);
      }

      const changedOptimizedData = findDifferentElements(tempFileHash, changed);
      const addedOptimizedData = findDifferentElements(tempFileHash, added);
      this.statusCallback({
        message: {
          changedOptimizedData: changedOptimizedData,
          addedOptimizedData: addedOptimizedData,
          changed: changed,
          added: added,
          tempFileHash: tempFileHash,
          msg: "findDifferentElements"
        },
        status: "init"
      });
      await Promise.all(
        unique([...addedOptimizedData, ...changedOptimizedData]).map((hash) => {
          const fileName = `${this.baseUrl}${hash}.gz`;
          this.downloadQueue.addTask(() => {
            return this.downloadQueue.downAndungzip(
              hash,
              fileName,
              join(this.tempDirectory, hash),
              this.downloadFn
            );
          });
          return 1;
        })
      );
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
      console.log("downloadUpdate", error);
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
  async validateDiffPackageIntegrity (): Promise<boolean> {
    const diffResult = this.checkForUpdates();
    if (diffResult !== undefined) {
      let tempFileHash: string[] = [];
      const diffResultAll = unique([...diffResult.changed, ...diffResult.added].map((v) => v.hash));
      try {
        tempFileHash = await getLocalDifferenceFileName(this.tempDirectory);
      } catch (error) {
        console.log("Get local difference packages", error);
      }
      this.statusCallback({
        message: {
          tempFileHash: tempFileHash,
          diffResultAll: diffResultAll,
          msg: "validateDiffPackageIntegrity"
        },
        status: "init"
      });
      const is = hasSameElement(diffResultAll, tempFileHash);
      this.statusCallback({
        message: {
          is: is,
          msg: "hasSameElement"
        },
        status: "init"
      });
      return is;
    }
    return false;
  }
}
