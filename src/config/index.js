if (process.env.NODE_ENV !== "production") {
  const path = require("path").join(__dirname, "..", "..", ".env");
  require("dotenv").config({ path });
}

module.exports = {
  URL_BASE_FRONT: process.env.URL_BASE_FRONT,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  DB_PORT: process.env.DB_PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_CALLBACK: process.env.GOOGLE_CLIENT_CALLBACK,
  GOOGLE_CLIENT_SUCCESS_REDIRECT: process.env.GOOGLE_CLIENT_SUCCESS_REDIRECT,
};
