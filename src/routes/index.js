const { Router, json } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const morgan = require("morgan");
const { myStore } = require("../config/connection");
const { URL_BASE_FRONT } = require("../config");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const compression = require('compression')
const AuthRoutes = require("./auth.route");
const UserRoutes = require("./user.route");
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
  apiRoutes.use(morgan("dev"));
  apiRoutes.use(
    session({
      secret: "Keyboard",
      // store: new SequelizeStore({
      //   db: sequelize,
      // }),
      store: myStore,
      resave: false,
      saveUninitialized: true,
    })
  );
  apiRoutes.use(passport.initialize());
  apiRoutes.use(passport.session());
  apiRoutes.use(
    cors({
      origin: URL_BASE_FRONT,
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  apiRoutes.use("/auth", AuthRoutes());
  apiRoutes.use("/user", UserRoutes());

  router.use("/api/v1", apiRoutes);
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};
