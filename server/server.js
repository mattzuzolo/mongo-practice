
//require library imports
let express = require("express");
let bodyParser = require("body-parser");


//require local imports
let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");


//Store express application in app
let app = express();

//configure middleware
app.use(bodyParser.json()); //can now send JSON to express application


//configure routes here:
app.post("/todos", (request, response) => {
  let todo = new Todo({
    text: request.body.text
  })

  todo.save().then((doc) => {
    response.send(doc);
  }, (error) => {
    response.status(400).send(error);
  });
});


//Listen on this port
app.listen(3000, () => {
  console.log("Started on port 3000")
});

module.exports = { app };
