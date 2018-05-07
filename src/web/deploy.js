const build = require("./build");

module.exports = () => {
  build().then(() => {
    console.log("Built, now deploy");
  });
};
