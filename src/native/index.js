const program = require("commander");
const linkProject = require("../utils/linkProject");
const writeConfig = require("../utils/writeConfig");

const commands = {
  start: require("./start"),
  run: require("./run")
};

program
  .command("native <cmd>")
  .description("Execute a command with the native template")
  .option("--ios", "Run iOS")
  .option("--android", "Run android")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return linkProject("native")
        .then(writeConfig("web"))
        .then(() => commands[cmd](cmd, options, program))
        .catch(e => {
          console.error(e);
          process.exit(1);
        });
    }

    console.log("Unknown command");
  });
