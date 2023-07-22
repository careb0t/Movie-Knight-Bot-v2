const Guilds = require("../../schemas/Guild");

module.exports = {
  name: "guildDelete",
  once: false,
  execute(guild, client) {
    //delete guild from the database
    Guilds.findOneAndDelete({ id: guild.id }).then((deletedGuild) => {
      console.log(`Deleted guild from the database: ${deletedGuild.name}`);
    });
  },
};
