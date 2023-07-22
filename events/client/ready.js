const { loadCommands } = require("../../handlers/commandLoader");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("The Client is ready!");

    loadCommands(client);
  },
};
