const program = require("commander");
const getProjectConfig = require("./utils/getProjectConfig");
const initWeb = require("./web/init");
const initNative = require("./native/init");

program
  .command("init")
  .description("Execute a command with the web template")
  .action(function(cmd, options) {
    return getProjectConfig()
      .then(config => {
        if (config.web) return initWeb(config).then(() => config);

        return config;
      })
      .then(config => {
        if (config.native) return initNative(config);
      });
  });
