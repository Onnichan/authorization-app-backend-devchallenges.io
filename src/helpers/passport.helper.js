const passport = require("passport");
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_CALLBACK,
} = require("../config/index");
const UserModel = require("../models/user.model");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CLIENT_CALLBACK,
    },
    async function (req, accessToken, refreshToken, profile, done) {
      const foundUser = await UserModel.findOne({
        where: { oauth_id: profile.id },
      });
      const user = {
        oauth_id: profile.id,
        name: profile.name.givenName + profile.name.familyName,
        image: profile.photos[0].value,
        provider: profile.provider,
        email: profile.emails[0].value,
      };
      req.session.auth = "calcio";
      req.session.user = foundUser;
      if (foundUser) {
        console.log("founded", user);
        console.log(user);
        // user.id = foundUser.id;
        done(null, foundUser);
      } else {
        const res = await UserModel.create(user);
        // console.log("response", res.toJSON());
        done(null, res.toJSON());
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

module.exports = passport;
