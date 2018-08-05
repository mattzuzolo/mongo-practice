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

  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5b6676a627701ab29d19733d")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});