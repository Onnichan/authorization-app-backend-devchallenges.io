const { Router } = require("express");
const passport = require("passport");
const AuthController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const GooglePassport = require("../helpers/passport.helper");

module.exports = function () {
  const router = Router();

  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  router.get(
    "/google",
    GooglePassport.authenticate("google", { scope: ["profile"] })
  );
  router.get(
    "/google/callback",
    GooglePassport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
      // Successful authentication, redirect home.
      console.log("here");
      res.redirect("/");
    }
  );
  // router.post("/logout", [authMiddleware], AuthController.logout);
  return router;
};
