const express = require("express");
const { PORT } = require("./src/config");
const { myStore } = require("./src/config/connection");
const route = require("./src/routes");

const app = express();

myStore
  .sync({ logging: true })
  .then(() => {
    app.use(route());
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  })
  .catch(console.log);
