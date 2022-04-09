/// <reference types="node" />
import { Readable } from "stream";
/**
 * 文件hash
 *
 * @export
 * @class HashedFile
 */
export declare class HashedFile {
    /**
     * name 文件名称 不为空
     *
     * @type {string}
     * @memberof HashedFile
     */
    name: string;
    /**
     * hash 文件hash 不为空
     *
     * @type {string}
     * @memberof HashedFile
     */
    hash: string;
}
export declare type HashedFolderAndFileType = HashedFile | HashedFolder;
export declare type HashedFolderAndFileTypeObject = {
    [index: string]: HashedFolderAndFileType;
};
/**
 * 文件夹及文件 hash 文件夹hash是改目录下所有文件的hash的hash
 *
 * @export
 * @class HashedFolder
 * @extends {HashedFile}
 */
export declare class HashedFolder extends HashedFile {
    /**
     * children 文件夹下的文件及文件夹
     *
     * @type {HashedFolderAndFileType[]}
     * @memberof HashedFolder
     */
    children?: (HashedFolderAndFileType | null)[];
    /**
     * childrenObject 文件夹下的文件及文件夹的映射
     *
     * @type {HashedFolderAndFileTypeObject}
     * @memberof HashedFolder
     */
    childrenObject?: HashedFolderAndFileTypeObject;
}
export declare class DiffVersionHashResultItem {
    /**
     * 文件相对地址
     *
     * @type {string}
     * @memberof DiffVersionHashResultItem
     */
    filePath: string;
    /**
     * 文件hash 应该下载的文件名称
     *
     * @type {string}
     * @memberof DiffVersionHashResultItem
     */
    hash: string;
}
export declare class DiffVersionHashResult {
    constructor();
    added: DiffVersionHashResultItem[];
    changed: DiffVersionHashResultItem[];
}
/**
 * hashElements生成时过滤的文件夹和文件
 *
 * @interface HashElementOptions
 */
export interface HashElementOptions {
    folders?: {
        exclude?: string[];
    };
    files?: {
        exclude?: string[];
    };
}
/**
 * 生成的更新json
 *
 * @export
 * @interface UpdateJson
 */
export interface UpdateJson {
    version: string;
    hash: HashedFolderAndFileType;
    targetPath: string;
}
/**
 * 更新回调信息
 *
 * @export
 * @class UpdateInfo
 */
export declare class UpdateInfo {
    constructor();
    status: "init" | "downloading" | "finished" | "failed";
    message: any;
}
export declare type DownloadFn = (url: string) => Promise<Readable>;
