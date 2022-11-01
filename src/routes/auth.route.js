const { Router } = require("express");
const passport = require("passport");
const AuthController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const GooglePassport = require("../helpers/passport.helper");
const JWTHelper = require("../helpers/jwt.helper");

module.exports = function () {
  const router = Router();

  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  router.get("/login/success", (req, res) => {
    if (req.user) {
      console.log("req.user", req.user);
      // const token = JWTHelper.generateToken(req.user, "1h");
      // console.log(token);
      return res.send(req.user);
    }
  });
  router.get(
    "/google",
    GooglePassport.authenticate("google", {
      scope: ["profile", "email"],
      // session: false,
    })
  );
  router.get(
    "/google/callback",
    GooglePassport.authenticate("google", {
      successRedirect: "http://localhost:5173/profile",
      failureRedirect: "",
      // session: false,
    })
  );
  // router.post("/logout", [authMiddleware], AuthController.logout);
  router.get("/logout", (req, res) => {
    req.logout();
  });
  return router;
};
