import { DownloadFn, HashElementOptions, UpdateInfo, UpdateJson } from "./type";
export declare class UpdateElectron {
    statusCallback: (res: UpdateInfo) => void;
    updaterName: string;
    version: string;
    exePath: string;
    tempDirectory: string;
    updateConfigName: string;
    updateJson: UpdateJson;
    baseUrl: string;
    downloadFn: DownloadFn;
    options: HashElementOptions;
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
    constructor(statusCallback: (res: UpdateInfo) => void, updaterName: string, version: string, exePath: string, tempDirectory: string, updateConfigName: string, updateJson: UpdateJson, baseUrl: string, downloadFn: DownloadFn, options?: HashElementOptions);
    /**
     * 检查当前版本是否需要更新
     * 返回需要更新的文件数量
     */
    checkForUpdates(): Promise<number>;
    /**
     * diffResult
     *
     * @private
     * @type {(DiffVersionHashResult | undefined)}
     * @memberof UpdateElectron
     */
    private __diffResult;
    /**
     * 下载差异包到本地
     * @param diffResult
     */
    downloadUpdate(): Promise<boolean>;
    /**
     * 安装
     *
     * @param force 是否强制安装,强制安装的话不会检查本地的差异包是否完整
     * @returns {Promise<boolean>} false为无法执行安装
     */
    install(force?: boolean): Promise<boolean | undefined>;
    /**
     * 检查本地和远程差异包是否有不一样
     *
     * @returns {Promise<boolean>} 如果有差异返回的是true
     */
    private validateDiffPackageIntegrity;
}
