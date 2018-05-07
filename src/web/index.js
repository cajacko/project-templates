const program = require("commander");
const linkProject = require("../utils/linkProject");

const commands = {
  start: require("./start"),
  deploy: require("./deploy")
};

program
  .command("web <cmd>")
  .description("Execute a command with the web template")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return linkProject().then(() => commands[cmd](cmd, options));
    }

    console.log("Unknown command");
  });
