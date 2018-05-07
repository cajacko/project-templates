const path = require("path");
const runCommand = require("../utils/runCommand");

module.exports = () => {
  console.log("get token");

  return runCommand(
    path.join(__dirname, "../../"),
    "node_modules/.bin/firebase",
    ["login:ci"]
  );
};
