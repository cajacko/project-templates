const path = require("path");
const link = require("../utils/link");

module.exports = () => {
  return link(
    path.join(__dirname, "./template/node_modules/project-templates")
  );
};
