const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

let id = "5b67664a786fae7dd0c14c6a";

// if (!ObjectID.isValid(id)){
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos by find", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo by findOne", todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log("Todo by id", todo);
// }).catch((error) => console.log(error));

let userId = "5b6731da5b8e12f3c244bf30";

User.findById(userId).then((user) => {
  if (!user) {
    return console.log("Unable to find user.");
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (error) => {
  console.log(error);
})
