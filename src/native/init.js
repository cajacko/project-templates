const path = require("path");
const pkg = require("./template/package.json");
const runCommand = require("../utils/runCommand");
const getProjectDir = require("../utils/getProjectDir");

module.exports = config => {
  const args = ["add"];

  Object.keys(pkg.peerDependencies).forEach(dependency => {
    args.push(`${dependency}@${pkg.peerDependencies[dependency]}`);
  });

  return runCommand(getProjectDir(), "yarn", args).then(() => {
    return runCommand(
      path.join(getProjectDir(), "node_modules/@cajacko/lib"),
      "yarn",
      args
    );
  });
};
