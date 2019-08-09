const Sequelize = require('sequelize');
const db = require('./index');

const Todo = sequelize.define('todos', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }, 
}, {
  timestamps: false
});

db
  .sync()
  .then(() => console.log('Synced with mySQL Database'))
  .catch(err => console.error(err));

module.exports = Todo;