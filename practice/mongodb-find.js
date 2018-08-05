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

  // db.collection("Todos").find({
  //   _id: new ObjectID("5b666ac2da4ea69230667479")
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  //count documents
  db.collection("Todos").find().count().then((count) => {
    console.log(`Todos count: ${count}`);

  }, (err) => {
    console.log("Unable to fetch todos", err);
  });


  // db.close();
});
