import {createHash} from 'crypto';
import {basename, extname, join} from 'path';
import {
    statSync,
    readFileSync,
    readdirSync,
    createWriteStream,
    createReadStream,
    existsSync,
    rename
} from 'fs';
import {makeRe} from 'minimatch';
import {
    DiffVersionHashResult,
    DiffVersionHashResultItem,
    DownloadFn,
    HashedFile,
    HashedFolder,
    HashedFolderAndFileType,
    HashedFolderAndFileTypeObject,
    HashElementOptions
} from './type';
import {createGzip, createGunzip} from 'zlib';

/**
 * 生成hash 256
 *
 * @param {(Buffer | string)} data
 * @returns
 */
export function hash256(data: Buffer | string) {
    return createHash('sha256').update(data).digest('hex');
}

/**
 * 过滤文件夹 正则匹配
 *
 * @param {(string[] | undefined | ((str: string) => boolean))} globs
 * @param {string} param
 * @returns {boolean}
 */
export function reduceGlobPatterns(
    globs: string[] | undefined | ((str: string) => boolean),
    param: string
): boolean {
    if (typeof globs === 'function') {
        return globs(param);
    } else if (!globs || !Array.isArray(globs) || globs.length === 0) {
        return false;
    } else {
        // combine globs into one single RegEx
        const regex = new RegExp(
            globs
                .reduce((acc, exclude) => {
                    return acc + '|' + makeRe(exclude).source;
                }, '')
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
export function hashElement(
    dirOrFilePath: string,
    options: HashElementOptions = {}
): HashedFolderAndFileType | null {
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
        result.children = readdirSync(dirOrFilePath)
            .map((item) => {
                return hashElement(join(dirOrFilePath, item), options);
            })
            .filter((item) => item !== null);
        result.hash = hash256(result.children.map((item) => item!.hash).join(''));
        return result;
    }
  return null;
}

/**
 * 用Object缓存文件信息，减少循环次数
 *
 * @param {HashedFolder} data
 */
export function handleHashedFolderChildrenToObject(data: HashedFolderAndFileType) {
    if (data && (data as HashedFolder).children) {
        (data as HashedFolder).childrenObject = (data as HashedFolder).children!.reduce(
            (prev, next) => {
                if ((next as HashedFolder).children) {
                    handleHashedFolderChildrenToObject(next as HashedFolderAndFileType);
                }
                prev[next!.name] = next as HashedFolderAndFileType;
                return prev;
            },
            {} as HashedFolderAndFileTypeObject
        );
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
export function diffVersionHash(
    oldVersion: HashedFolder,
    newVersion: HashedFolder,
    result: DiffVersionHashResult = new DiffVersionHashResult(),
    path: string = '.'
) {
    // 不管是文件夹还是文件 hash一样就返回
    if (newVersion.hash === oldVersion.hash) {
        return result;
    } else if (newVersion.children) {
        newVersion.children.forEach((item) => {
            item = item as HashedFolderAndFileType;
            // 如果老版本含有相同
            if (oldVersion.childrenObject && oldVersion.childrenObject[item.name]) {
                diffVersionHash(oldVersion.childrenObject[item.name], item, result, path + '/' + item.name);
            } else {
                pushdiffVersionHashResult(item, path + '/' + item.name, result.added);
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
export function pushdiffVersionHashResult(
    item: HashedFolderAndFileType,
    path: string,
    resultAdd: DiffVersionHashResultItem[]
) {
    // 作为文件夹
    if ((item as HashedFolder).children) {
        (item as HashedFolder).children!.forEach((child) => {
            pushdiffVersionHashResult(
                child as HashedFolderAndFileType,
                path + '/' + child!.name,
                resultAdd
            );
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
export function gzip(source: string, targetPath: string): Promise<void> {
    // source文件目录
    return new Promise((resolve, reject: (err: Error) => void) => {
        const gzip = createGzip(); // 转化流 可读可写
        const writeStream = createWriteStream(targetPath);
        const readStream = createReadStream(source);
        readStream.on('close', resolve);
        readStream.on('error', reject);
        writeStream.on('error', reject);
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
 * @param {boolean} [ignoreFirstDir=false]
 */
export async function zipHashElement(
    data: HashedFolderAndFileType,
    path: string,
    targetPath: string,
    ignoreFirstDir: boolean = false
) {
    if ((data as HashedFolder).children) {
        for (let i = 0; i < (data as HashedFolder).children!.length; i++) {
            await zipHashElement(
                (data as HashedFolder).children![i] as HashedFolderAndFileType,
                path + (ignoreFirstDir ? '' : '/' + data.name),
                targetPath
            );
        }
    } else {
        await gzip(path + '/' + data.name, join(targetPath, data.hash + '.gz'));
    }
}

let downloadQueueLock = false;
const downloadQueue = [];

/**
 * 下载gzip文件
 *
 * @param {string} sourceHash 文件hash
 * @param {string} sourceUrl 文件url
 * @param {string} targetPath 文件存放位置
 * @param {DownloadFn} downloadFn 下载工具
 * @return {*}  {Promise<boolean>}
 */
export function downAndungzip(
    sourceHash: string,
    sourceUrl: string,
    targetPath: string,
    downloadFn: DownloadFn
): Promise<boolean> {
    return new Promise((resolve, reject) => {
        // 防止多次下载
        if (existsSync(targetPath) && hash256(readFileSync(targetPath)) === sourceHash) {
            resolve(true);
        } else {
            const hash = createHash('sha256');
            const ungz = createGunzip();
            const writeStream = createWriteStream(targetPath);
            downloadFn(sourceUrl).then(
                (response) => {
                    response.pipe(ungz);
                },
                (err) => {
                    reject(err);
                }
            );
            ungz.on('error', (err) => {
                ungz.close();
                writeStream.close();
                hash.destroy();
                reject(err);
            });
            ungz.on('data', (chunk) => {
                hash.write(chunk);
                writeStream.write(chunk);
            });
            ungz.on('end', () => {
                if (hash.digest('hex') !== sourceHash) {
                    hash.destroy();
                    reject(new Error('下载文件出错'));
                } else {
                    resolve(true);
                    // // 下载成功后将 ***.aaa 文件重命名为 ***
                    // rename(targetPath + '.crdownload', targetPath, (err) => {
                    //   if (err) {
                    //     reject(err);
                    //   } else {
                    //     resolve(true);
                    //   }
                    // });
                }
            });
        }
    });
}

/**
 * 获取临时存储中所有差异包的文件名
 *
 * @param {string} tempDirectory 临时存储差异包的目录
 * @returns {*}  {Promise<string[]>}
 */
export function getLocalDifferenceFileName(tempDirectory: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        try {
            // 获取文件夹下的所有文件和文件夹
            const files = readdirSync(tempDirectory);

            const result: string[] = [];

            // 循环遍历所有文件和文件夹
            for (const file of files) {
                const filePath = `${tempDirectory}/${file}`;
                // 判断文件类型
                const stat = statSync(filePath);
                if (stat.isFile()) {
                    const ext = extname(filePath);
                    if (ext === '') {
                        const fileName = file;
                        result.push(fileName);
                    }
                }
            }
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * 判断arr1是否属于arr2
 *
 * @param arr1
 * @param arr2
 * @returns
 */
export function hasSameElement(arr1: string[], arr2: string[]) {
    if (arr2.length < arr1.length) return false;
    const set1 = new Set(arr1);
    const result = arr2.every((item) => set1.has(item));
    return result;
}

/**
 * 查找出arr2中不属于arr1中的所有数据
 *
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {string[]}
 */
export function findDifferentElements(arr1: string[], arr2: string[]): string[] {
    const aSet = new Set(arr1);
    const newElements: string[] = [];
    for (let i = 0; i < arr2.length; i++) {
        // Set.has复杂度是O(1)
        if (!aSet.has(arr2[i])) {
            newElements.push(arr2[i]);
        }
    }
    return newElements;
}

/**
 * 数组去重
 *
 * @param {string[]} arr
 * @returns {string[]}
 */
export function unique(arr: string[]): string[] {
    return [...new Set([...arr])];
}
