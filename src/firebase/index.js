const program = require("commander");
const linkProject = require("../utils/linkProject");

const commands = {
  ["get-token"]: require("./getToken")
};

program
  .command("firebase <cmd>")
  .description("Execute a firebase command")
  .action(function(cmd, options) {
    if (commands[cmd]) {
      return linkProject().then(() => commands[cmd](cmd, options));
    }

    console.log("Unknown command");
  });
