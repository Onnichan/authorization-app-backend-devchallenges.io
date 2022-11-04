const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");
const GooglePassport = require("../helpers/passport.helper");
const { GOOGLE_CLIENT_SUCCESS_REDIRECT } = require("../config");

module.exports = function () {
  const router = Router();

  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  //endpoint of success redirection for frontend
  router.get("/login/success", (req, res) => {
    console.log("calling to req.user");
    if (req.user) {
      // if it can use because there are sessions, with JWT it would not be possible
      console.log("req.user", req.user);
      return res.send(req.user);
    }
  });
  router.get(
    "/google",
    GooglePassport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  router.get(
    "/google/callback",
    GooglePassport.authenticate("google", {
      successRedirect: `${GOOGLE_CLIENT_SUCCESS_REDIRECT}/profile`,
      failureRedirect: "",
    })
  );
  router.get("/logout", (req, res) => {
    req.logout();
  });
  return router;
};
