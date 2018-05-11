const path = require("path");
const link = require("../utils/link");

module.exports = project => {
  return link(
    path.join(
      __dirname,
      `../${project}/template/node_modules/@cajacko/project`
    )
  );
};
