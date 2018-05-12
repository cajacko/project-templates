const path = require("path");
const fs = require("fs-extra");
const getProjectDir = require("../utils/getProjectDir");
const getProjectConfig = require("./getProjectConfig");

module.exports = (project, useAbsolute) => () => {
  const importRoot = useAbsolute ? getProjectDir() : "@cajacko/project";

  return getProjectConfig().then(config => {
    const { reducers, routes } = config[project];

    const file = `
import reducers from '${importRoot}/${reducers}';
import routes from '${importRoot}/${routes}';

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
