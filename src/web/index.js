const program = require("commander");
const linkProject = require("../utils/linkProject");
const writeConfig = require("../utils/writeConfig");

const commands = {
  start: require("./start"),
  deploy: require("./deploy"),
  init: require("./init")
};

program
  .command("web <cmd>")
  .description("Execute a command with the web template")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return linkProject("web")
        .then(writeConfig("web"))
        .then(() => commands[cmd](cmd, options))
        .catch(e => {
          console.error(e);
          process.exit(1);
        });
    }

    console.log("Unknown command");
  });
