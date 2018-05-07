const build = require("./build");
const runNpmScript = require("../utils/runNpmScript");

module.exports = () => {
  build().then(() => {
    return runNpmScript("deploy");
  });
};
