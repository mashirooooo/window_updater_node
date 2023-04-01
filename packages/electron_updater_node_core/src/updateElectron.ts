import { gt } from "semver";
import { join, dirname } from "path";
import sudo from "@vscode/sudo-prompt";
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
  downAndungzip,
  handleHashedFolderChildrenToObject,
  hashElement
} from "./functions";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { spawn } from "child_process";
import { Queue } from "./queue";

export class UpdateElectron {
  /**
   * @param {(res: UpdateInfo)} statusCallback  用于回调内部消息,一般情况用不到
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
    private statusCallback: (res: UpdateInfo) => void,
    private updaterName: string,
    private version: string,
    private exePath: string,
    private tempDirectory: string,
    private updateConfigName: string,
    private updateJson: UpdateJson,
    private baseUrl: string,
    private downloadFn: DownloadFn,
    private options: HashElementOptions = {
      files: {}
    }
  ) {
    this.__diffResult = undefined;
  }

  /**
   * 检查当前版本是否需要更新
   * 返回需要更新的文件数量
   */
  async checkForUpdates (): Promise<number> {
    try {
      if (!existsSync(this.tempDirectory)) {
        mkdirSync(this.tempDirectory);
      }
      const noAsar = process.noAsar;
      if (gt(this.updateJson.version, this.version)) {
        process.noAsar = true;
        const dirDirectory = dirname(this.exePath);
        const hash = hashElement(dirDirectory, this.options);
        handleHashedFolderChildrenToObject(hash as HashedFolderAndFileType);
        // 缓存result
        const diffResult = diffVersionHash(
          hash as HashedFolderAndFileType,
          this.updateJson.hash as HashedFolder
        );
        // 写入更新配置文件
        writeFileSync(join(this.tempDirectory, this.updateConfigName + ".json"), JSON.stringify(diffResult, null, 2));
        if (diffResult && diffResult.added.concat(diffResult.changed).length > 0) {
          this.__diffResult = Object.freeze(diffResult);
        }
        return diffResult.added.concat(diffResult.changed).length;
      }
      process.noAsar = noAsar;
      return 0;
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
      return 0;
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
        const r: Promise<boolean> = new Promise((resolve, reject) => {
          const queue = new Queue(5, () => { resolve(true); });
          // 不会未定义
          this.__diffResult!.added.concat(this.__diffResult!.changed).forEach(i => {
            const fileName = `${this.baseUrl}${i.hash}.gz`;
            queue.addTask({
              task: () => {
                return downAndungzip(
                  i.hash,
                  fileName,
                  join(this.tempDirectory, i.hash),
                  this.downloadFn
                );
              },
              // todo 下载失败回调 成功回调
              taskReject: (err) => {
                console.log(err);
              },
              taskReslove: (status) => { }
            });
          });
        });
        return r;
      } catch (error) {
        this.statusCallback({
          message: error,
          status: "failed"
        });
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
   * 管理员
   *
   * @private
   * @memberof UpdateElectron
   */
  private sudoInstall (): Promise<boolean> {
    return new Promise((resolve, reject) => {
      sudo.exec(this.updaterName, {
        env: {
          exe_path: this.exePath,
          update_temp_path: this.tempDirectory,
          update_config_file_name: this.updateConfigName + ".json",
          exe_pid: process.pid.toString(),
          UPDATE_RUN_ADMIN: "1"
        },
        name: this.updaterName

      }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  /**
   * 正常安装
   *
   * @private
   * @memberof UpdateElectron
   */
  private normalInstall (): true {
    spawn(this.updaterName, {
      detached: true,
      env: {
        exe_path: this.exePath,
        update_temp_path: this.tempDirectory,
        update_config_file_name: this.updateConfigName + ".json",
        exe_pid: process.pid.toString()
      },
      stdio: "ignore"
    });
    return true;
  }

  /**
   *
   *
   * @param {boolean} [force=false] 是否强制安装,强制安装的话不会检查本地的差异包是否完整
   * @param {boolean} [sudoInstall=true] 是否管理员安装安装
   * @return {*}  {Promise<boolean>}
   * @memberof UpdateElectron
   */
  async install (force: boolean = false, sudoInstall: boolean = true): Promise<boolean> {
    try {
      if (force || !await this.validateDiffPackageIntegrity()) {
        return sudoInstall ? this.sudoInstall() : this.normalInstall();
      } else {
        this.statusCallback({
          message: "Installation check difference failed",
          status: "failed"
        });
        return false;
      }
    } catch (error) {
      this.statusCallback({
        message: error,
        status: "failed"
      });
      return false;
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
