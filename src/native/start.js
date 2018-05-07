const path = require("path");

module.exports = () => {
  console.log("start");
  const appPath = path.join(process.cwd(), "project.json");

  const appConfig = require(appPath);

  console.log(appConfig);
};
