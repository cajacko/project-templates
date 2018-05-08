const path = require("path");
const link = require("../utils/link");

module.exports = () => {
  return link(
    path.join(
      __dirname,
      "../web/template/node_modules/@cajacko/project-templates"
    )
  );
};
