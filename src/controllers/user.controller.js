const userService = require("../services/user.service");

class UserController {
  async update(req, res) {
    const { body } = req;
    // console.log("update", body);
    const updateUser = await userService.update(body);
    return res.send(updateUser);
  }
}

module.exports = new UserController();
