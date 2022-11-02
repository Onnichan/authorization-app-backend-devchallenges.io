const { Router } = require("express");
const UserController = require("../controllers/user.controller");

module.exports = function(){
  const router = Router();

  router.post("/update", UserController.update);
  return router;
}
