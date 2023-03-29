/// <reference types="node" />
import {
    DiffVersionHashResult,
    DiffVersionHashResultItem,
    DownloadFn,
    HashedFolder,
    HashedFolderAndFileType,
    HashElementOptions
} from './type';
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
 * 下载gzip文件
 *
 * @param {string} sourceHash 文件hash
 * @param {string} sourceUrl 文件url
 * @param {string} targetPath 文件存放位置
 * @param {DownloadFn} downloadFn 下载工具
 * @return {*}  {Promise<boolean>}
 */
export declare function downAndungzip(sourceHash: string, sourceUrl: string, targetPath: string, downloadFn: DownloadFn): Promise<boolean>;

/**
 * 获取临时存储中所有差异包的文件名
 *
 * @param {string} tempDirectory 临时存储差异包的目录
 * @returns {*}  {Promise<string[]>}
 */
export declare function getLocalDifferenceFileName(tempDirectory: string): Promise<string[]>;

/**
 * 判断arr1是否属于arr2
 *
 * @param arr1
 * @param arr2
 * @returns
 */
export declare function hasSameElement(arr1: string[], arr2: string[]): boolean;

/**
 * 查找出arr2中不属于arr1中的所有数据
 *
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {string[]}
 */
export declare function findDifferentElements(arr1: string[], arr2: string[]): string[];

/**
 * 数组去重
 *
 * @param {string[]} arr
 * @returns {string[]}
 */
export declare function unique(arr: string[]): string[];
