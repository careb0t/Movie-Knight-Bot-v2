// Necessary imports
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { connect } = require("mongoose");

// Create new client instance
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventLoader");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

connect(client.config.dbURL, {}).then(() => {
  console.log("The client is connect to the database!");
});

loadEvents(client);

// Log in to Discord with token
client.login(client.config.botToken).then(() => {
  console.log("Movie Knight is logged in!");
});
