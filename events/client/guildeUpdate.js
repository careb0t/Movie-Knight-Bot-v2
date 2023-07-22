const Guilds = require("../../schemas/Guild");

module.exports = {
  name: "guildUpdate",
  once: false,
  execute(oldGuild, newGuild, client) {
    //update guild in the database
    Guilds.findOneAndUpdate(
      { id: oldGuild.id },
      { $set: { name: newGuild.name, icon: newGuild.iconURL } },
      { new: true }
    ).then((updatedGuild) => {
      console.log(`Updated guild in the database: ${updatedGuild.name}`);
    });
  },
};
