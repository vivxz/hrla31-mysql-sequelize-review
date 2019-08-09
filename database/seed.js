const Todo = require("./models");

const todoSeedData = [
  {
    name: "Cook dinner"
  },
  {
    name: "Feed Cat"
  },
  {
    name: "Watch TV"
  },
  {
    name: "Sleep"
  }
];

Todo
  .sync()
  .then(() => {
    Todo.bulkCreate(todoSeedData)
      .then(() => console.log("Todos Seeded"));
  });