const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnotationSchema = require("./annotation");

const PersonSchema = new Schema({
  name: String,
  // annotation: [AnnotationSchema],
});

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
