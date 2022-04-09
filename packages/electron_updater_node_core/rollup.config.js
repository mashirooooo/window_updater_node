import typescript from "@rollup/plugin-typescript"; // 让 rollup 认识 ts 的代码

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    terser(),
    resolve({
      preferBuiltins: true
    }),
    cleanup()
  ]
};
