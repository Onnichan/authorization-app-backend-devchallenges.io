if (process.env.NODE_ENV !== "production") {
  const path = require("path").join(__dirname, "..", "..", ".env");
  require("dotenv").config({ path });
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
};
