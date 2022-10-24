const { UserModel } = require("../models");

class UserRepository {
  async create(entity) {
    const create = await UserModel.create(entity);
    return create;
  }

  async getUserByEmail(email) {
    const findOne = await UserModel.findOne({ where: { email } });
    return findOne;
  }
}

module.exports = new UserRepository();
