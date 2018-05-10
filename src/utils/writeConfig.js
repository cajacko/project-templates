const path = require("path");
const fs = require("fs-extra");
const getProjectDir = require("../utils/getProjectDir");

module.exports = project => () => {
  const configPath = path.join(getProjectDir(), "project.json");

  return fs.readJson(configPath).then(config => {
    const { reducers, routes } = config[project];

    const file = `
import reducers from "@cajacko/project-templates/${reducers}";
import routes from "@cajacko/project-templates/${routes}";

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
