const path = require("path");

module.exports = () => {
  console.log("start");
  const appPath = path.join(process.cwd(), "app.json");

  const appConfig = require(appPath);

  console.log(appConfig);
};
