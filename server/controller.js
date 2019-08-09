const Todo = require('../database/models');

const controller = {
  get: (req, res) => {
    Todo.findAll({})
      .then((data) => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  },
  post: (req, res) => {
    const { name } = req.body;
    Todo.create({ name })
      .then(() => res.status(201).send("Successful post"))
      .catch(err => res.status(401).send(err))
  },
  update: (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    Todo.update({ name }, { where: { id }})
      .then((data) => {
        if (data[0] === 1) {
          res.status(202).send(`Updated id ${id} with ${name}`)
        } else {
          res.status(202).send(`Could not update at id ${id}`);
        }
      })
      .catch(err => res.status(402).send(err))
  },
  delete: (req, res) => {
    const { id } = req.params;
    Todo.destroy({ where: { id }})
      .then((data) => {
        res.status(200).send(`Destroyed id ${id}`)
      })
      .catch(err => console.error(err))
  }
}

module.exports = controller;