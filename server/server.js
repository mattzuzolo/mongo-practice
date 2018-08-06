
//require library imports
let express = require("express");
let bodyParser = require("body-parser");
let { ObjectID } = require("mongodb");

//require local imports
let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");



//Store express application in app
//configured for heroku
let app = express();
const port = process.env.PORT || 3000;

//configure middleware
app.use(bodyParser.json()); //can now send JSON to express application


//configure routes here:

//POST
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


//GET
app.get("/todos", (request, response) => {
  Todo.find().then((todos) => {
    response.send({todos}); //make this an object instead of array for flexibility later on
  }, (error) => {
    response.status(400).send(error)
  });
})


//GET /todos/:id

app.get("/todos/:id", (request, response) => {
  let id = request.params.id;

  if (!ObjectID.isValid(id)){
    return response.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return response.status(404).send();
    }

    response.send({todo});
  }).catch((error) => {
    response.status(400).send();
  });

})




//Listen on this port
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
