const path = require("path");
const getConfig = require("../utils/getConfig");

module.exports = () => {
  console.log("start");
  const config = getConfig();

  console.log(config);
};
