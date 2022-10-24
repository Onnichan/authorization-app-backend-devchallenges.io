
const express = require("express");
const { PORT } = require("./src/config");
const sequelize = require("./src/config/connection");
const route = require("./src/routes");

const app = express();

sequelize
  .sync({ logging: false })
  .then(() => {
    app.use(route());
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  })
  .catch(console.log);