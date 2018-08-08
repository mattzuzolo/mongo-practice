const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = require("./person");
const ArtworkSchema = require("./artwork")

const AnnotationSchema = new Schema({
  title: String,
  body: String,
  person: [PersonSchema],
  artwork: [ArtworkSchema],
});

const Annotation = mongoose.model("annotation", AnnotationSchema);

module.exports = Annotation;
