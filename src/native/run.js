const path = require("path");
const runCommand = require("../utils/runCommand");

module.exports = (cmd, options) => {
  const platform = options.android ? "android" : "ios";

  return runCommand(path.join(__dirname, "../native/template"), "yarn", [
    platform
  ]);
};
