const program = require("commander");

const commands = {
  start: require("./start"),
  init: require("./init")
};

program
  .command("web <cmd>")
  .description("Execute a command with the native template")
  .action(function(cmd, options) {
    console.log("web");

    if (commands[cmd]) {
      return commands[cmd](cmd, options);
    }

    console.log("Unknown command");
  });
