const program = require("commander");

const commands = {};

program
  .command("native <cmd>")
  .description("Execute a command with the native template")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return commands[cmd](cmd, options);
    }

    console.log("Unknown command");
  });
