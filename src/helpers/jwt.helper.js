const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// eslint-disable-next-line func-names
module.exports.generateToken = function (user, expiresIn) {
  return sign({ user }, JWT_SECRET, { expiresIn });
};
