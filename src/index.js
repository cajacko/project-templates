#! /usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
require("./native");

program.version(pkg.version, "-v, --version");

program.parse(process.argv);
