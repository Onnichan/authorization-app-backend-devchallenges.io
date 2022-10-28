const passport = require("passport");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../config/index");
const UserModel = require("../models/user.model");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/api/v1/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      // UserModel.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;
