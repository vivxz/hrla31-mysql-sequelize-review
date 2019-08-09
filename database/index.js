const Sequelize = require('sequelize');

const db = new Sequelize('sequelizeReview', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db
  .authenticate()
  .then(() => console.log('Connected to MySQL Database!'))
  .catch(error => console.error(error));

module.exports = db;