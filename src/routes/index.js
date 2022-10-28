const { Router, json } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
// const compression = require('compression')
const AuthRoutes = require("./auth.route");
const notFoundMiddleware = require("../middlewares/notfound.middleware");
const errorMiddleware = require("../middlewares/error.middleware");
const passport = require("passport");
require("express-async-errors");

module.exports = function () {
  const router = Router();
  const apiRoutes = Router();
  apiRoutes.use(json());
  // apiRoutes.use(compression())
  apiRoutes.use(helmet());
  apiRoutes.use(
    session({
      secret: "Keyboard",
      resave: true,
      saveUninitialized: true,
    })
  );
  apiRoutes.use(passport.initialize());
  apiRoutes.use(passport.session());
  apiRoutes.use(cors());
  apiRoutes.use("/auth", AuthRoutes());

  router.use("/api/v1", apiRoutes);
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};
