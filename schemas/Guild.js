const { Schema, model } = require("mongoose");

module.exports = model(
  "Guild",
  new Schema({
    id: { type: String, unique: true },
    name: String,
    icon: String,
    owner_id: String,
    moderator_role_id: String,
    movie_night_role_id: String,
    movie_night_channel_id: String,
    movie_list_channel_id: String,
    movie_cooldown: String,
    request_list: [Object],
  })
);
