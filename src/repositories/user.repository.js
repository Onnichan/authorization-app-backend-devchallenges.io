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

  async update(entity) {
    console.log(entity);
    const updated = await UserModel.update(entity, {
      where: {
        id: entity.id,
      },
    });

    console.log(updated);
    return updated;
  }
}

module.exports = new UserRepository();
