const path = require("path");
const spawn = require("react-dev-utils/crossSpawn");

module.exports = script => {
  return new Promise((resolve, reject) => {
    try {
      process.chdir(path.join(__dirname, "../web/template"));

      const ls = spawn(
        "node",
        [require.resolve(`../web/template/scripts/${script}`)],
        {
          stdio: "inherit"
        }
      );

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
