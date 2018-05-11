const path = require("path");
const fs = require("fs-extra");
const getProjectDir = require("../utils/getProjectDir");

module.exports = project => () => {
  const projectDir = getProjectDir();
  const configPath = path.join(projectDir, "project.json");

  return fs.readJson(configPath).then(config => {
    const { reducers, routes } = config[project];

    const file = `
import reducers from '${projectDir}/${reducers}';
import routes from '${projectDir}/${routes}';

export default {
  reducers,
  routes
};
    `;

    const filePath = path.join(
      __dirname,
      "../",
      project,
      "template/src/project.config.js"
    );

    return fs.writeFile(filePath, file);
  });
};
