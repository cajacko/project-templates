const path = require("path");
const spawn = require("react-dev-utils/crossSpawn");

module.exports = (dir, cmd, opts) => {
  return new Promise((resolve, reject) => {
    try {
      process.chdir(dir);

      const ls = spawn(cmd, opts, {
        stdio: "inherit"
      });

      ls.on("close", code => {
        if (code) {
          reject(new Error(`child process exited with code ${code}`));
        } else {
          resolve();
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};
