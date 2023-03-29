import { DownloadFn } from "./type";
declare type DownloadTask = {
    task: () => Promise<boolean>;
    finnishCallBack: (status: boolean, err?: Error) => void;
};
export default class DownloadQueue {
    private tasks;
    private isDownloading;
    downLoadFinnishCallBack(callback: () => void): void;
    private __downLoadFinnishCallBack;
    addTask(task: DownloadTask): void;
    /**
     * 下载gzip文件
     *
     * @param {string} sourceHash 文件hash
     * @param {string} sourceUrl 文件url
     * @param {string} targetPath 文件存放位置
     * @param {DownloadFn} downloadFn 下载工具
     * @return {*}  {Promise<boolean>}
     */
    downAndungzip(sourceHash: string, sourceUrl: string, targetPath: string, downloadFn: DownloadFn): Promise<boolean>;
    private download;
}
export {};
