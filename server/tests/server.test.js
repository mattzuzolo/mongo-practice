const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Person } = require("./../models/person");
const { Annotation } = require("./../models/annotation");


const seedPerson = [{
  _id: new ObjectID(),
  name: "Matt"
},{
  _id: new ObjectID(),
  name: "Kayla"
},{
  _id: new ObjectID(),
  name: "David"
},{
  _id: new ObjectID(),
  name: "Jordan"
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
  title: "Title of annotation #0",
  body: "Body of annotation #0",
  person: seedPerson[0],
},{
  _id: new ObjectID(),
  title: "Title of annotation #1",
  body: "Body of annotation #1",
  person: seedPerson[0],
},{
  _id: new ObjectID(),
  title: "Title of annotation #2",
  body: "Body of annotation #2",
  person: seedPerson[1],
},{
  _id: new ObjectID(),
  title: "Title of annotation #3",
  body: "Body of annotation #3",
  person: seedPerson[3],
}];


//add seed data for testing
// const seedTodos = [{
//   _id: new ObjectID(),
//   text: "First test todo"
// }, {
//   _id: new ObjectID(),
//   text: "Second test todo"
// }];

//testing lifecycle method
// beforeEach((done) => {
//   Person.remove({}).then(() => {
//     Person.insertMany(seedPerson);
//   }).then(() => done());
// });

describe("Seeding", () => {

  it("should create a new instance of person", function() {
    console.log(seedPerson)
    expect(seedPerson[0].name).toBe("Matt");
  })

  it("should create a new instance of annotation", function() {
    console.log(seedAnnotation)
    expect(seedAnnotation[0].title).toBe("Title of annotation #0");
    expect(seedAnnotation[0].body).toBe("Body of annotation #0");
  })

});

describe("Building relationships", () => {

  it("should add a person to each annotation", function() {
    console.log(seedAnnotation)
    expect(seedAnnotation[1].person).toBe(seedPerson[0]);
    expect(seedAnnotation[3].person).toBe(seedPerson[3]);
  })

});

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
