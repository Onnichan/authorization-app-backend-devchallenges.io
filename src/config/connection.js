const { Sequelize } = require("sequelize");
const { DATABASE, USER, PASSWORD,HOST } = require(".");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: HOST,

});

module.exports = sequelize;
