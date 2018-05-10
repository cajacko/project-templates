const latestVersion = require("latest-version");
const semver = require("semver");
const path = require("path");
const fs = require("fs-extra");
const runCommand = require("../src/utils/runCommand");
const pkg = require("../package.json");

const pkgVersion = pkg.version;

latestVersion("@cajacko/project-templates").then(latestVersion => {
  const versionToUse = semver.gt(pkgVersion, latestVersion)
    ? pkgVersion
    : semver.inc(latestVersion, "patch");

  console.log(`${versionToUse} - versionToUse`);

  //   return runCommand(path.join(__dirname, "../"), "yarn", [
  //     "publish",
  //     "--access=public",
  //     "--new-version",
  //     versionToUse
  //   ]);

  const contents = Object.assign({}, pkg, { version: versionToUse });

  return fs.writeJson(path.join(__dirname, "../package.json"), contents, {
    spaces: 2
  });
});
