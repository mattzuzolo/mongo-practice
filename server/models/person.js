const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PersonSchema = new Schema({
  name: String,
  password: String,
  favoriteWorks: [],
});

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
