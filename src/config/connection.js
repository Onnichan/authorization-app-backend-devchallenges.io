const { Sequelize } = require("sequelize");
const { DATABASE, USER, PASSWORD, HOST, DB_PORT } = require(".");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: HOST,
  port: DB_PORT,
});

module.exports = sequelize;
