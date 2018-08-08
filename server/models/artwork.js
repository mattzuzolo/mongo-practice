const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema({
  title: String,
  artist: String,
  serverId: Number,
});

const Artwork = mongoose.model("artwork", ArtworkSchema);

module.exports = Artwork;
