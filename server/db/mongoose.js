let mongoose = require("mongoose");
let { config } = require("./config");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27107/TodoApp");

module.exports = { mongoose }
