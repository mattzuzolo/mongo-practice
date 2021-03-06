const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Person } = require("./../models/person");
const { Annotation } = require("./../models/annotation");



const seedPerson = [{
  _id: new ObjectID(),
  name: "Matt",
  password: "the best password ever",
  favoriteWorks: ["a", "b", "c"]
},{
  _id: new ObjectID(),
  name: "Kayla",
  password: "password"
},{
  _id: new ObjectID(),
  name: "David",
  password: "DavidT"
},{
  _id: new ObjectID(),
  name: "Jordan",
  password: "12345"
}];

const seedArtwork = [{
  _id: new ObjectID(),
  title: "The Persistence of Memory",
  artist: "Salvador Dalí",
  serverId: 134,
},{
  _id: new ObjectID(),
  title: "The Farm",
  artist: "Joan Miró",
  serverId: 265,
},{
  _id: new ObjectID(),
  title: "Guernica",
  artist: "Pablo Picasso",
  serverId: 377,
},{
  _id: new ObjectID(),
  title: "Las Meninas",
  artist: "Diego Velázquez",
  serverId: 438,
}];

const seedAnnotation = [{
  _id: new ObjectID(),
  title: "Pedestrian at Best.",
  body: "I could totally paint this. Why is it in a museum?",
  person: seedPerson[0],
  artwork: seedArtwork[0],
},{
  _id: new ObjectID(),
  title: "Pretty meh",
  body: "It could be better. I prefer Banksy. That's real art.",
  person: seedPerson[0],
  artwork: seedArtwork[1],
},{
  _id: new ObjectID(),
  title: "cool.",
  body: "jk lame.",
  person: seedPerson[1],
  artwork: seedArtwork[0],
},{
  _id: new ObjectID(),
  title: "One of his best works",
  body: "Love it.",
  person: seedPerson[3],
  artwork: seedArtwork[2],
},{
  _id: new ObjectID(),
  title: "Another title here",
  body: "Love it.",
  person: seedPerson[3],
  artwork: seedArtwork[2],
},{
  _id: new ObjectID(),
  title: "Terrible.",
  body: "Love it.",
  person: seedPerson[3],
  artwork: seedArtwork[2],
},{
  _id: new ObjectID(),
  title: "Overrated.",
  body: "Love it.",
  person: seedPerson[3],
  artwork: seedArtwork[3],
},{
  _id: new ObjectID(),
  title: "Really? I could paint this.",
  body: "Love it.",
  person: seedPerson[3],
  artwork: seedArtwork[1],
}];

const seedComment = [{
  _id: new ObjectID(),
  content: "You are the worst.",
  person: seedPerson[0],
},{
  _id: new ObjectID(),
  content: "Delete your account",
  person: seedPerson[0],
},{
  _id: new ObjectID(),
  content: "lol",
  person: seedPerson[0],
},{
  _id: new ObjectID(),
  content: "<comment unrelated to this annotation, for some reason.",
  person: seedPerson[1],
},{
  _id: new ObjectID(),
  content: "<comment unrelated to this annotation, for some reason.",
  person: seedPerson[1],
},{
  _id: new ObjectID(),
  content: "<comment unrelated to this annotation, for some reason.",
  person: seedPerson[3],
},{
  _id: new ObjectID(),
  content: "<comment unrelated to this annotation, for some reason.",
  person: seedPerson[3],
}];


describe("Seeding", () => {

  it("should create a new instance of person", function() {
    console.log(seedPerson)
    expect(seedPerson[0].name).toBe("Matt");
  })

  xit("should create a new instance of annotation", function() {
    console.log(seedAnnotation)
    expect(seedAnnotation[0].title).toBe("Pedestrian at Best.");
    expect(seedAnnotation[0].body).toBe("I could totally paint this. Why is it in a museum?");
  })

});

describe("Building relationships", () => {

  xit("should add a person to each annotation", function() {
    console.log(seedAnnotation)
    expect(seedAnnotation[1].person).toBe(seedPerson[0]);
    expect(seedAnnotation[3].person).toBe(seedPerson[3]);
  })

  xit("should add a work to each annotation", function() {
    console.log(seedAnnotation)
    expect(seedAnnotation[0].artwork).toBe(seedArtwork[0]);
    expect(seedAnnotation[3].artwork).toBe(seedArtwork[2]);
  })

  xit("should add a person to a comment", function() {
    console.log(seedAnnotation)
    expect(seedComment[0].person).toBe(seedPerson[0]);
    expect(seedComment[3].person).toBe(seedPerson[1]);
    expect(seedComment[5].person).toBe(seedPerson[3]);
  })

});


//add seed data for testing
// const seedTodos = [{
//   _id: new ObjectID(),
//   text: "First test todo"
// }, {
//   _id: new ObjectID(),
//   text: "Second test todo"
// }];




//
// describe("POST /todos", () => {
//   it("should create a new todo", (done) => {
//     let text = "Test todo text";
//
//     request(app)
//       .post("/todos")
//       .send({text})
//       .expect(200)
//       .expect((response) => {
//         expect(response.body.text).toBe(text);
//       })
//       .end((error,response) => {
//         if (error) {
//           return done(error);
//         }
//
//         Todo.find({text}).then((todos) => {
//           expect(todos.length).toBe(1);
//           expect(todos[0].text).toBe(text);
//           done();
//         }).catch((error) => done(error));
//       });
//   });
//
//   it("should not create todo with invalid body data", (done) => {
//     request(app)
//       .post("/todos")
//       .send({})
//       .expect(400)
//       .end((error,response) => {
//         if (error) {
//           return done(error);
//         }
//
//         Todo.find().then((todos) => {
//           expect(todos.length).toBe(2);
//           done();
//         }).catch((error) => done(error));
//       });
//   });
// });
//
// describe("GET /todos", () => {
//   it("should get all todos", (done) => {
//     request(app)
//       .get("/todos")
//       .expect(200)
//       .expect((response) => {
//         expect(response.body.todos.length).toBe(2);
//       })
//       .end(done);
//   });
// });
//
// describe("GET /todos/:id", () => {
//   it("should return todo doc", (done) => {
//     request(app)
//       .get(`/todos/${seedTodos[0]._id.toHexString()}`)
//       .expect(200)
//       .expect((response) => {
//         expect(response.body.todo.text).toBe(seedTodos[0].text);
//       })
//       .end(done)
//   })
//
//   it("should return 404 if todo no found", (done) => {
//     let hexId = new ObjectID().toHexString();
//
//     request(app)
//       .get(`/todos/${hexId}`)
//       .expect(404)
//       .end(done);
//   });
//
//   it("should return 404 for non-object ids", (done) => {
//     request(app)
//       .get("/todos/badparam")
//       .expect(404)
//       .end(done);
//   })
// })
