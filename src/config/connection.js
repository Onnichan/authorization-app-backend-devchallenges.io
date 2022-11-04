const { Sequelize } = require("sequelize");
const { DATABASE, USER, PASSWORD, HOST, DB_PORT } = require(".");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: HOST,
  port: DB_PORT,
});

// For sequelize create the session table in mysql for store the sessions on server
const myStore = new SequelizeStore({
  db: sequelize,
});

// module.exports = sequelize;
module.exports = {
  sequelize,
  myStore
};
