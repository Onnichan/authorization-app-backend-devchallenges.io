const UserRepository = require("../repositories/user.repository");

class UserService {
  async create(entity) {
    console.log("creating");
    const userCreated = await UserRepository.create(entity);
    return userCreated;
  }

  async getUserByEmail(email) {
    const getUser = await UserRepository.getUserByEmail(email);
    return getUser;
  }
}

module.exports = new UserService();