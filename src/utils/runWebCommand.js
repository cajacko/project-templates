const path = require("path");
const runCommand = require("./runCommand");

module.exports = script => {
  return runCommand(path.join(__dirname, "../web/template"), "node", [
    require.resolve(`../web/template/scripts/${script}`)
  ]);
};
