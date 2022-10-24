const AuthService = require("../services/auth.service");

class AuthController {
  async register(req, res) {
    const { body } = req;
    console.log(body);
    const createdUser = await AuthService.register(body);
    return res.status(201).send(createdUser);
  }

  async login(req, res) {
    const { body } = req;
    const creds = await AuthService.login(body);
    return res.send(creds);
  }

  async logout(){
    const logout = await AuthService.logout();
    return res.send(logout);
  }
}

module.exports = new AuthController();