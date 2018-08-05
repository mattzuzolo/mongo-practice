// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

//Destructuring:
// let user = { name: "Matt", age: 24 };
// let {name} = user;

//How to fetch:
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //delete many
  // db.collection("Todos").deleteMany({text: "Cook dinner"})
  // .then((result) => console.log(result));

  //delete insertOne
  // db.collection("Todos").deleteOne({text: "Prepare lunch"})
  // .then((result) => console.log(result));

  //findOneAndDelete - also returns values
  // db.collection("Todos").findOneAndDelete({completed: false})
  // .then((result) => console.log(result));


  // db.close();
});
