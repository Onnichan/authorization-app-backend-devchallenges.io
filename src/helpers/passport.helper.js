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
    async function (accessToken, refreshToken, profile, done) {
      // console.log(profile);

      const foundUser = await UserModel.findOne({
        where: { oauth_id: profile.id },
      });
      const user = {
        oauth_id: profile.id,
        name: profile.name.givenName,
        lastname: profile.name.familyName,
        image: profile.photos[0].value,
        provider: profile.provider,
        email: profile.emails[0].value,
      };
      if (foundUser) {
        console.log("founded", user);
        return done(null, user);
      } else {
        await UserModel.create(user);
        return done(null, user);
      }
    }
  )
);

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   const user = await UserModel.findByPk(id);
//   done(null, user);
// });

module.exports = passport;
