const path = require("path");
const spawn = require("react-dev-utils/crossSpawn");
const link = require("../utils/link");

module.exports = () => {
  link(path.join(__dirname, "./template/node_modules/project-templates")).then(
    () => {
      process.chdir(path.join(__dirname, "./template"));

      spawn("node", [require.resolve("./template/scripts/start")], {
        stdio: "inherit"
      });
    }
  );
};
