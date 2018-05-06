const program = require("commander");

program
  .command("native <cmd>")
  .description("execute the given remote cmd")
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  })
  .on("--help", function() {
    console.log("  Examples:");
    console.log();
    console.log("    $ deploy exec sequential");
    console.log("    $ deploy exec async");
    console.log();
  });
