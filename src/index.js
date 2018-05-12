#! /usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
require("./utils/loadProjectEnv");
require("./native");
require("./web");
require("./firebase");
require("./init");

program.version(pkg.version, "-v, --version");

program.parse(process.argv);
