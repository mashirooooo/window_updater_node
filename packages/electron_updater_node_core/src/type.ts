/* eslint-disable no-unused-vars */
import { Readable } from "stream";

/**
 * 文件hash
 *
 * @export
 * @class HashedFile
 */
export class HashedFile {
  /**
   * name 文件名称 不为空
   *
   * @type {string}
   * @memberof HashedFile
   */
  name!: string;
  /**
   * hash 文件hash 不为空
   *
   * @type {string}
   * @memberof HashedFile
   */
  hash!: string;
}
// 文件夹及文件 hash
// eslint-disable-next-line no-use-before-define
export type HashedFolderAndFileType = HashedFile | HashedFolder;

// 缓存文件信息，减少循环次数
export type HashedFolderAndFileTypeObject = {
  [index: string]: HashedFolderAndFileType
}

/**
 * 文件夹及文件 hash 文件夹hash是改目录下所有文件的hash的hash
 *
 * @export
 * @class HashedFolder
 * @extends {HashedFile}
 */
export class HashedFolder extends HashedFile {
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

// diff结果item
export class DiffVersionHashResultItem {
  /**
   * 文件相对地址
   *
   * @type {string}
   * @memberof DiffVersionHashResultItem
   */
  filePath!: string;
  /**
   * 文件hash 应该下载的文件名称
   *
   * @type {string}
   * @memberof DiffVersionHashResultItem
   */
  hash!: string;
}

// diff两个版本之间的文件差异，查看应该新增和修改的文件 不对比删除文件
export class DiffVersionHashResult {
  constructor () {
    this.added = [];
    this.changed = [];
  }

  // 新增
  added: DiffVersionHashResultItem[];

  // 修改
  changed: DiffVersionHashResultItem[];
}

/**
 * hashElements生成时过滤的文件夹和文件
 *
 * @interface HashElementOptions
 */
export interface HashElementOptions {
  folders?: {
    exclude?: string[]
  },
  files?: {
    exclude?: string[]
  }
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
export class UpdateInfo {
  constructor () {
    this.status = "init";
    this.message = "";
  };

  status: "init" | "downloading" | "finished" | "failed";
  message: any;
}
export type DownloadFn = (url: string) => Promise<Readable>;

export enum UpdateStatus {
  HaveNothingUpdate = 0,
  Success = 1,
  Failed = 2,
}

declare global {
  namespace NodeJS {
    export interface Process {
      noAsar?: boolean;
    }
  }
}
