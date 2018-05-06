const program = require("commander");
const start = require("./start");

program
  .command("native <cmd>")
  .description("Execute a command with the native template")
  .action(function(cmd, options) {
    switch (cmd) {
      case "start":
        return start();
      default:
        console.log("Unknown command");
    }
  });
