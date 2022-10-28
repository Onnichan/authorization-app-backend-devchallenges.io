const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/connection");

class User extends Model {
  comparePassword = (password) => bcrypt.compareSync(password, this.password);
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    hooks: {
      beforeSave: (user) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
    modelName: "User",
  }
);

module.exports = User;
