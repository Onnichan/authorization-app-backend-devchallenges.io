const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

module.exports = function () {
  const router = Router();

  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  router.post("/logout", [authMiddleware], AuthController.logout);
  return router;
};
