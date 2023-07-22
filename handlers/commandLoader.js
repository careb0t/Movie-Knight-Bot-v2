async function loadCommands(client) {
  const { loadFiles } = require("../functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii("Commands", "Status");

  console.time("Commands Loaded");
  console.log("Loading commands...");

  await client.commands.clear();
  await client.subCommands.clear();

  let commandsArray = [];

  const Files = await loadFiles("commands");

  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand) {
      return client.subCommands.set(command.subCommand, command);
    }

    client.commands.set(command.data.name, command);

    commandsArray.push(command.data.toJSON());

    table.addRow(command.data.name, "✅");
  });

  client.application.commands.set(commandsArray);

  console.table(commandsArray, ["name", "description"]);
  console.info("\n\x1b[36m%s\x1b[0m", "Loaded Commands.");
  console.timeEnd("Commands Loaded");
}

module.exports = { loadCommands };
