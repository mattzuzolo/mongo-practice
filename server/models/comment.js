const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = require("./person");

const CommentSchema = new Schema({
  content: String,
  person: [PersonSchema]
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
