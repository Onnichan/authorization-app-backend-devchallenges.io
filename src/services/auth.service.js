const errorHelper = require("../helpers/error.helper");
const UserService = require("./user.service");
const JwtHelper = require("../helpers/jwt.helper");

class AuthService {
  async register(user) {
    const { email } = user;
    const userExist = await UserService.getUserByEmail(email);
    if (userExist) errorHelper("User already exist", 401);

    const userCreated = await UserService.create(user);
    return userCreated;
  }

  async login(user) {
    const { email, password } = user;
    const userExist = await UserService.getUserByEmail(email);
    if (!userExist) errorHelper("User does not exist", 404);

    const validPassword = userExist.comparePassword(password);
    if (!validPassword) errorHelper("Invalid Password", 400);

    const userToEncode = {
      username: userExist.username,
      id: userExist.id,
    };

    const token = JwtHelper.generateToken(userToEncode, "4h");
    console.log("token", token);
    return { token, user: userExist };
  }

  async logout() {
    JwtHelper.generateToken();
  }
}

module.exports = new AuthService();
