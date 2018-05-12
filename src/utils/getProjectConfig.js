const path = require("path");
const fs = require("fs-extra");
const getProjectDir = require("../utils/getProjectDir");

let projectConfig;

module.exports = () => {
  if (projectConfig) return Promise.resolve(projectConfig);

  const configPath = path.join(getProjectDir(), "project.json");

  return fs.readJson(configPath).then(config => {
    projectConfig = config;

    return projectConfig;
  });
};
