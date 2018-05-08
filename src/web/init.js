const fs = require("fs-extra");
const path = require("path");
const getProjectDir = require("../utils/getProjectDir");

module.exports = () => {
  const src = path.join(__dirname, "./template/.travis.yml");
  const dest = path.join(getProjectDir(), ".travis.yml");

  return fs.copy(src, dest);
};
