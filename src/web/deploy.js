const path = require("path");
const fs = require("fs-extra");
const build = require("./build");
const runCommand = require("../utils/runCommand");
const getProjectDir = require("../utils/getProjectDir");

module.exports = () => {
  return build()
    .then(() => {
      const firebaserc = {
        projects: {
          default: process.env.FIREBASE_PROJECT_ID
        }
      };

      return fs.writeJSON(
        path.join(__dirname, "../../.firebaserc"),
        firebaserc,
        { spaces: 2 }
      );
    })
    .then(() => {
      return fs.copy(
        path.join(__dirname, "../templates/firebase.json"),
        path.join(__dirname, "../../firebase.json")
      );
    })
    .then(() => {
      return runCommand(
        path.join(__dirname, "../../"),
        "node_modules/.bin/firebase",
        ["deploy", "--token", process.env.FIREBASE_CI_TOKEN]
      );
    });
};
