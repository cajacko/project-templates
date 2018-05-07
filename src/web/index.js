const program = require("commander");

const commands = {
  start: require("./start")
};

program
  .command("web <cmd>")
  .description("Execute a command with the web template")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return commands[cmd](cmd, options);
    }

    console.log("Unknown command");
  });
