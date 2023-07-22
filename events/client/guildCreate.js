const { EmbedBuilder } = require("discord.js");
const Guilds = require("../../schemas/Guild");

module.exports = {
  name: "guildCreate",
  once: false,
  async execute(guild, client) {
    let guildExists = await Guilds.exists({ id: guild.id });

    if (guildExists) {
      return console.log("Guild already exists in the database.");
    }

    //create new guild in the database
    const newGuild = new Guilds({
      id: guild.id,
      name: guild.name,
      icon: guild.iconURL(),
      owner_id: guild.ownerId,
      moderator_role_id: "",
      movie_night_role_id: "",
      movie_night_channel_id: "",
      movie_list_channel_id: "",
      movie_cooldown: "",
      request_list: [],
    });

    //save the new guild
    newGuild.save().then((nGuild) => {
      console.log(`New guild added to the database: ${nGuild.name}`);
    });

    //create embed to send as join message
    const Embed = new EmbedBuilder()
      .setTitle("Movie Knight is here!")
      .setColor("Purple")
      .setDescription(
        "Movie Knight is a Discord bot that helps with managing movie nights in your server. \n\nTo get started, the owner of the server should use the **/setup** command. \n\nIf you would ilke to see an explanation of all my different commands, use **/help!**"
      );

    const sysChannel = guild.systemChannel;

    sysChannel.send({ embeds: [Embed] });
  },
};
