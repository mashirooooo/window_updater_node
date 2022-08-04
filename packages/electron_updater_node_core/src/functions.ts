import { createHash } from "crypto";
import { basename, join, dirname } from "path";
import { statSync, readFileSync, readdirSync, createWriteStream, createReadStream, existsSync, mkdirSync, writeFileSync } from "fs";
import { makeRe } from "minimatch";
import { DiffVersionHashResult, DiffVersionHashResultItem, DownloadFn, HashedFile, HashedFolder, HashedFolderAndFileType, HashedFolderAndFileTypeObject, HashElementOptions, UpdateInfo, UpdateJson, UpdateStatus } from "./type";
import { createGzip, createGunzip } from "zlib";
import gt from "semver/functions/gt";
import { spawn } from "child_process";

/**
 * 生成hash 256
 *
 * @param {(Buffer | string)} data
 * @returns
 */
export function hash256 (data: Buffer | string) {
  return createHash("sha256").update(data).digest("hex");
}

/**
 * 过滤文件夹 正则匹配
 *
 * @param {(string[] | undefined | ((str: string) => boolean))} globs
 * @param {string} param
 * @returns {boolean}
 */
export function reduceGlobPatterns (globs: string[] | undefined | ((str: string) => boolean), param: string): boolean {
  if (typeof globs === "function") {
    return globs(param);
  } else if (!globs || !Array.isArray(globs) || globs.length === 0) {
    return false;
  } else {
    // combine globs into one single RegEx
    const regex = new RegExp(
      globs
        .reduce((acc, exclude) => {
          return acc + "|" + makeRe(exclude).source;
        }, "")
        .substring(1)
    );
    return regex.test(param);
  }
}

/**
 * 根据文件路径生成hash
 *
 * @param {string} dirOrFilePath
 * @param {HashElementOptions} options
 * @returns {HashedFolderAndFileType}
 */
export function hashElement (dirOrFilePath: string, options: HashElementOptions = {}): HashedFolderAndFileType | null {
  const fileOrDir = statSync(dirOrFilePath);
  const baseName = basename(dirOrFilePath);
  if (fileOrDir.isFile()) {
    if (reduceGlobPatterns(options?.files?.exclude, baseName)) {
      return null;
    }
    const result = new HashedFile();
    result.name = baseName;
    result.hash = hash256(readFileSync(dirOrFilePath));
    return result;
  } else if (fileOrDir.isDirectory()) {
    if (reduceGlobPatterns(options?.folders?.exclude, baseName)) {
      return null;
    }
    const result = new HashedFolder();
    result.name = baseName;
    result.children = readdirSync(dirOrFilePath).map(item => {
      return hashElement(join(dirOrFilePath, item), options);
    }).filter(item => item !== null);
    result.hash = hash256(result.children.map(item => item!.hash).join(""));
    return result;
  }
  return null;
}

/**
 * 用Object缓存文件信息，减少循环次数
 *
 * @param {HashedFolder} data
 */
export function handleHashedFolderChildrenToObject (data: HashedFolderAndFileType) {
  if (data && (data as HashedFolder).children) {
    (data as HashedFolder).childrenObject = (data as HashedFolder).children!.reduce((prev, next) => {
      if ((next as HashedFolder).children) {
        handleHashedFolderChildrenToObject(next as HashedFolderAndFileType);
      }
      prev[next!.name] = next as HashedFolderAndFileType;
      return prev;
    }, {} as HashedFolderAndFileTypeObject);
  }
}

/**
 *
 *  diff两个版本之间的文件差异，查看新增和修改的文件
 * @param {HashedFolder} oldVersion // 储存本地的文件信息 由hashElement获取并handleHashedFolderChildrenToObject转化过的
 * @param {HashedFolder} newVersion // 线上的文件信息
 * @param {*} [result=[]] 结果diff文件差异
 * @param {string} path 文件路径
 * @returns
 */
export function diffVersionHash (oldVersion: HashedFolder, newVersion: HashedFolder, result: DiffVersionHashResult = new DiffVersionHashResult(), path: string = ".") {
  // 不管是文件夹还是文件 hash一样就返回
  if (newVersion.hash === oldVersion.hash) {
    return result;
  } else if (newVersion.children) {
    newVersion.children.forEach(item => {
      item = item as HashedFolderAndFileType;
      // 如果老版本含有相同
      if (oldVersion.childrenObject && oldVersion.childrenObject[item.name]) {
        diffVersionHash(oldVersion.childrenObject[item.name], item, result, path + "/" + item.name);
      } else {
        pushdiffVersionHashResult(item, path + "/" + item.name, result.added);
      }
    });
  } else {
    result.changed.push({
      filePath: path,
      hash: newVersion.hash
    });
  }
  return result;
}

/**
 * 为新增的文件和文件夹循环添加到result.added数组中
 *
 * @param {HashedFolderAndFileType} item
 * @param {string} path
 * @param {DiffVersionHashResultItem[]} resultAdd
 */
export function pushdiffVersionHashResult (item: HashedFolderAndFileType, path: string, resultAdd: DiffVersionHashResultItem[]) {
  // 作为文件夹
  if ((item as HashedFolder).children) {
    (item as HashedFolder).children!.forEach(child => {
      pushdiffVersionHashResult(child as HashedFolderAndFileType, path + "/" + child!.name, resultAdd);
    });
  } else {
    resultAdd.push({
      filePath: path,
      hash: item.hash
    });
  }
}
/**
 * gzip压缩一个文件到指定路径下
 *
 * @export
 * @param {string} source
 * @param {string} targetPath
 * @return {*}
 */
export function gzip (source: string, targetPath: string): Promise<void> { // source文件目录
  return new Promise((resolve, reject: (err: Error) => void) => {
    const gzip = createGzip(); // 转化流 可读可写
    const writeStream = createWriteStream(targetPath);
    const readStream = createReadStream(source);
    readStream.on("close", resolve);
    readStream.on("error", reject);
    writeStream.on("error", reject);
    readStream.pipe(gzip).pipe(writeStream); // 读=>压缩=>写新的
  });
}
/**
 * hashElement后将对应的数据gzip压缩
 *
 * @export
 * @param {HashedFolderAndFileType} data
 * @param {string} path
 * @param {string} targetPath
 */
export async function zipHashElement (data: HashedFolderAndFileType, path: string, targetPath:string) {
  if ((data as HashedFolder).children) {
    for (let i = 0; i < (data as HashedFolder).children!.length; i++) {
      await zipHashElement((data as HashedFolder).children![i] as HashedFolderAndFileType, path + "/" + data.name, targetPath);
    }
  } else {
    await gzip(path + "/" + data.name, join(targetPath, data.hash + ".gz"));
  }
}

/**
 * 更新electron
 *
 * @export
 * @param {(updateInfo: UpdateInfo) => {}} statusCallBack // 更新状态回调
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
export async function updateElectron (
  statusCallBack:(updateInfo: UpdateInfo) => void,
  updaterName: string,
  version: string,
  exePath: string,
  tempDirectory: string,
  updateConfigName: string,
  updateJson: UpdateJson,
  baseUrl: string,
  downloadFn: DownloadFn,
  options:HashElementOptions = {
    files: {}
  }): Promise<UpdateStatus> {
  const dirDirectory = dirname(exePath);
  // const tempDirectory = join(dirDirectory, hotPublishConfig.tempDirectory);
  const updateInfo = new UpdateInfo();
  if (!existsSync(tempDirectory)) {
    mkdirSync(tempDirectory);
  }
  const noAsar = process.noAsar;
  try {
    if (gt(updateJson.version, version)) {
      updateInfo.status = "downloading";
      process.noAsar = true;
      const hash = hashElement(dirDirectory, options);
      handleHashedFolderChildrenToObject(hash as HashedFolderAndFileType);
      const diffResult = diffVersionHash(hash as HashedFolderAndFileType, updateJson.hash as HashedFolder);
      // 写入更新配置文件
      writeFileSync(join(tempDirectory, updateConfigName + ".json"), JSON.stringify(diffResult, null, 2));
      // 下载
      console.log(diffResult);
      statusCallBack(updateInfo);

      if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
      }
      await Promise.all(diffResult.changed.map(item => {
        return downAndungzip(item.hash, `${baseUrl}/${item.hash}.gz`, join(tempDirectory, item.hash), downloadFn);
      }));
      await Promise.all(diffResult.added.map(item => {
        return downAndungzip(item.hash, `${baseUrl}/${item.hash}.gz`, join(tempDirectory, item.hash), downloadFn);
      }));
      process.noAsar = noAsar;
      console.log("complete");
      // 下载完成 交给rust端处理
      updateInfo.status = "finished";
      statusCallBack(updateInfo);
      spawn(updaterName, {
        detached: true,
        env: {
          exe_path: exePath,
          update_temp_path: tempDirectory,
          update_config_file_name: updateConfigName + ".json",
          exe_pid: process.pid.toString()
        },
        stdio: "ignore"
      });
      return UpdateStatus.Success;
    } else {
      return UpdateStatus.HaveNothingUpdate;
    }
  } catch (error) {
    process.noAsar = noAsar;
    console.log(error);
    updateInfo.status = "failed";
    updateInfo.message = error;
    statusCallBack(updateInfo);
    return UpdateStatus.Failed;
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
function downAndungzip (sourceHash:string, sourceUrl: string, targetPath: string, downloadFn: DownloadFn): Promise<boolean> {
  return new Promise((resolve, reject) => {
    // 防止多次下载
    if (existsSync(targetPath) && (hash256(readFileSync(targetPath)) === sourceHash)) {
      resolve(true);
    } else {
      const hash = createHash("sha256");
      const ungz = createGunzip();
      const writeStream = createWriteStream(targetPath);
      downloadFn(sourceUrl).then(response => {
        response.pipe(ungz);
      }, err => {
        reject(err);
      });
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
          resolve(true);
        }
      });
    }
  });
}
