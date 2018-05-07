#! /usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
require("./native");
require("./web");

program.version(pkg.version, "-v, --version");

program.parse(process.argv);
