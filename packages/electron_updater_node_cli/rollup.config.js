import typescript from "@rollup/plugin-typescript"; // 让 rollup 认识 ts 的代码
import { builtinModules } from "module";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

const banner = "#! /usr/bin/env node";

export default {
  input: "./src/index.ts",
  output: [
    {
      banner: banner,
      file: pkg.main,
      format: "cjs"
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve({
      preferBuiltins: true
    })
  ],
  external: [...builtinModules, "chalk"]
};
