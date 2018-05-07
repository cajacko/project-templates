const path = require("path");
const getConfig = require("../utils/getConfig");

module.exports = () => {
  console.log("init");
  const config = getConfig();

  console.log(config);
};
