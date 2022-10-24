const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const errorHelper = require('../helpers/error.helper');

module.exports = function(req, res, next){
  // const {JWT_SECRET} = config;
  const token = req.headers['authorization'];
  if(!token) errorHelper('Token must be sent', 400)

  jwt.verify(token, JWT_SECRET, function(err, decodedToken){
    if(err) errorHelper('Invalid token', 401)
    
    req.user = decodedToken.user;
    next();
  });
}