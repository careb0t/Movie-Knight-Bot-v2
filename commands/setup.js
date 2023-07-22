const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  developer: false,
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Set up channels and roles for MovieKnight.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  // add one option each here for movie role, mod role, movie channe, movie list channel
};
