const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  developer: false,
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Set up channels and roles for MovieKnight.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("role").setDescription("Set up movie role")
    )
    .addSubcommand((options) =>
      options.setName("mod").setDescription("Set up movie mods.")
    ),
};
