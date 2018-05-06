import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

const banner = "#! /usr/bin/env node\n";

export default [
  {
    input: "src/main.js",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs", banner },
      { file: pkg.module, format: "es", banner }
    ],
    plugins: [json(), resolve()]
  }
];
