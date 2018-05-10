const path = require("path");
const runCommand = require("../utils/runCommand");

module.exports = () => {
  return runCommand(path.join(__dirname, "../native/template"), "yarn", [
    "start"
  ]);
};
