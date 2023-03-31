/// <reference types="node" />
import { DiffVersionHashResult, DiffVersionHashResultItem, DownloadFn, HashedFolder, HashedFolderAndFileType, HashElementOptions } from "./type";
/**
 * 生成hash 256
 *
 * @param {(Buffer | string)} data
 * @returns
 */
export declare function hash256(data: Buffer | string): string;
/**
 * 过滤文件夹 正则匹配
 *
 * @param {(string[] | undefined | ((str: string) => boolean))} globs
 * @param {string} param
 * @returns {boolean}
 */
export declare function reduceGlobPatterns(globs: string[] | undefined | ((str: string) => boolean), param: string): boolean;
/**
 * 根据文件路径生成hash
 *
 * @param {string} dirOrFilePath
 * @param {HashElementOptions} options
 * @returns {HashedFolderAndFileType}
 */
export declare function hashElement(dirOrFilePath: string, options?: HashElementOptions): HashedFolderAndFileType | null;
/**
 * 根据文件路径生成hash
 *
 * @export
 * @param {string} dirOrFilePath
 * @param {HashElementOptions} [options={}]
 * @param {number} [concurrency=1]
 * @return {*}
 */
export declare function hashElementPromiseQueue(dirOrFilePath: string, options?: HashElementOptions, concurrency?: number): Promise<HashedFolderAndFileType | null>;
/**
 * 用Object缓存文件信息，减少循环次数
 *
 * @param {HashedFolder} data
 */
export declare function handleHashedFolderChildrenToObject(data: HashedFolderAndFileType): void;
/**
 *
 *  diff两个版本之间的文件差异，查看新增和修改的文件
 * @param {HashedFolder} oldVersion // 储存本地的文件信息 由hashElement获取并handleHashedFolderChildrenToObject转化过的
 * @param {HashedFolder} newVersion // 线上的文件信息
 * @param {*} [result=[]] 结果diff文件差异
 * @param {string} path 文件路径
 * @returns
 */
export declare function diffVersionHash(oldVersion: HashedFolder, newVersion: HashedFolder, result?: DiffVersionHashResult, path?: string): DiffVersionHashResult;
/**
 * 为新增的文件和文件夹循环添加到result.added数组中
 *
 * @param {HashedFolderAndFileType} item
 * @param {string} path
 * @param {DiffVersionHashResultItem[]} resultAdd
 */
export declare function pushdiffVersionHashResult(item: HashedFolderAndFileType, path: string, resultAdd: DiffVersionHashResultItem[]): void;
/**
 * gzip压缩一个文件到指定路径下
 *
 * @export
 * @param {string} source
 * @param {string} targetPath
 * @return {*}
 */
export declare function gzip(source: string, targetPath: string): Promise<void>;
/**
 * hashElement后将对应的数据gzip压缩
 *
 * @export
 * @param {HashedFolderAndFileType} data
 * @param {string} path
 * @param {string} targetPath
 * @param {boolean} [ignoreFirstDir=false]
 */
export declare function zipHashElement(data: HashedFolderAndFileType, path: string, targetPath: string, ignoreFirstDir?: boolean): Promise<void>;
/**
 * 检测文件是否存在
 *
 * @export
 * @param {string} path
 * @param {string} hash
 * @return {Promise<boolean>}
 */
export declare function checkFileExitAndHash(path: string, hash: string): Promise<boolean>;
/**
 * 下载gzip文件
 *
 * @param {string} sourceHash 文件hash
 * @param {string} sourceUrl 文件url
 * @param {string} targetPath 文件存放位置
 * @param {DownloadFn} downloadFn 下载工具
 * @return {*}  {Promise<boolean>}
 */
export declare function downAndungzip(sourceHash: string, sourceUrl: string, targetPath: string, downloadFn: DownloadFn): Promise<boolean>;
