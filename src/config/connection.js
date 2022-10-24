const { Sequelize } = require("sequelize");
const {DATABASE, USER, PASSWORD} = require(".")

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
})

module.exports = sequelize;