if (process.env.NODE_ENV !== "production") {
  const path = require("path").join(__dirname, "..", "..", ".env");
  require("dotenv").config({ path });
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  DB_PORT: process.env.DB_PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
};
