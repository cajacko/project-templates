const symlinkDir = require("symlink-dir");
const path = require("path");
const getProjectDir = require("../utils/getProjectDir");

module.exports = destination => {
  return symlinkDir(getProjectDir(), destination).catch(err =>
    console.error(err)
  );
};
