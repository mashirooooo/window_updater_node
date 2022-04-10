
import { zipHashElement, hashElement, HashedFolderAndFileType } from "electron_updater_node_core";
import chalk from "chalk";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";

// 命令解析
interface IOption {
  pack: boolean;
  help: boolean;
  output: string;
  target: string;
  input: string;
  config?: string;
  updateJsonName: string;
  version?: string;
}
function checkOrFixOptions (options: IOption) {
  if (!existsSync(options.input)) {
    throw new Error("The input folder is not exist!");
  }
  if (!existsSync(options.output)) {
    mkdirSync(options.output);
  }
  options.target = options.target.replace(/\\$/, "");
  options.updateJsonName = options.updateJsonName.replace(/\.json$/, "").replace(/.\\\//ig, "");
}
function showDoc () {
  const sections = [
    {
      header: "Electron Updater Node Cli",
      content: "默认读取package.json中的version参数，并生成gzip包。"
    },
    {
      header: "Options",
      optionList: [
        {
          name: "pack",
          description: "运行pack功能",
          type: String,
          alias: "p"
        },
        {
          name: "help",
          description: "使用帮助",
          typeLabel: "{underline help}",
          alias: "h",
          type: Boolean
        },
        {
          name: "output",
          typeLabel: "{underline directory}",
          description: "pack后输出的base文件夹路径 (默认: ./build)",
          type: String,
          alias: "o"
        },
        {
          name: "target",
          typeLabel: "{underline directory}",
          description: "pack后输出的gzip文件夹路径 (默认: ./build/gzip)",
          type: String,
          alias: "t"
        },
        {
          name: "input",
          typeLabel: "{underline directory}",
          description: "pack未压缩的文件夹路径 (默认: ./build/win-unpacked)",
          type: String,
          alias: "i"
        },
        {
          name: "updateJsonName",
          typeLabel: "{underline string}",
          description: "更新的json名称 (默认: update-config)",
          type: String,
          alias: "u"
        },
        {
          name: "config",
          typeLabel: "{underline file}",
          description: "配置文件路径 (默认: package.json) 读取配置文件中的version及electronUpdaterConfig属性内容",
          type: String,
          alias: "c"
        }
      ]
    }
  ];
  console.log(commandLineUsage(sections));
}
// pack文件夹下的文件
async function startPack (options: IOption) {
  let _options = { ...options };
  console.log(chalk.green.bold("\n  开始读取配置"));
  try {
    if (_options.config) {
      const config = require(join(process.cwd(), _options.config));
      _options = { ..._options, ...config };
    } else {
      const pkg = require(join(process.cwd(), "package.json"));
      _options = { ..._options, ...pkg.electronUpdaterConfig, version: pkg.version };
    }
  } catch (error) {
    console.log(chalk.red.bold("\n 读取配置失败"));
  }
  checkOrFixOptions(_options);
  try {
    console.log(chalk.green.bold("\n  获取文件夹的hash内容"));
    const hash = hashElement(_options.input);
    const targetPath = join(_options.output, _options.target + _options.version);
    if (!existsSync(targetPath)) {
      mkdirSync(targetPath);
    }
    console.log(chalk.green.bold("\n  Gzip压缩文件"));
    await zipHashElement(hash as HashedFolderAndFileType, _options.output, targetPath);
    console.log(chalk.green.bold("\n  生成更新配置-json"));
    writeFileSync(join(_options.output, _options.updateJsonName + ".json"), JSON.stringify({
      version: _options.version,
      targetPath: _options.target + _options.version,
      hash: hash
    }, null, 2));
    console.log(
      "\n" + chalk.bgGreen.white(" 完成 ") + "  " + "The resource file is packaged!\n"
    );
  } catch (error) {
    console.log(
      "\n" +
      chalk.bgRed.white(" ERROR ") +
      "  " +
      chalk.red((error as Error).message || error) +
      "\n"
    );
    process.exit(1);
  }
}

async function start () {
  // 解析参数
  const optionDefinitions = [
    { name: "pack", alias: "p", type: Boolean, defaultValue: false },
    { name: "help", alias: "h", type: Boolean, defaultValue: true },
    { name: "output", alias: "o", type: String, defaultValue: "./build" },
    { name: "target", alias: "t", type: String, defaultValue: "gzip" },
    { name: "input", alias: "i", type: String, defaultValue: "./build/win-unpacked" },
    { name: "updateJsonName", alias: "u", type: String, defaultValue: "update-config" },
    { name: "config", alias: "c", type: String }
  ];
  // 解析
  const options = commandLineArgs(optionDefinitions) as IOption;
  // 执行脚本
  if (options.pack) {
    await startPack(options);
  } else { // 显示help
    showDoc();
  }
}
start();
