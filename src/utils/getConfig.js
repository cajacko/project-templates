const path = require("path");

module.exports = () => {
  const configPath = path.join(process.cwd(), "project.json");

  const config = require(configPath);

  return config;
};
