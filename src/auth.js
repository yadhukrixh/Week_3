// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const GOOGLE_CLIENT_ID = '546979335365-s41cmk8bso0j4u6isqe00uars5485oe4.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/home/",
//     passReqToCallback : true
//   },
//   function(accessToken, refreshToken, profile, cb) {
//       return cb(err, profile);
//   }
// ));

// passport.serializeUser((user,done)=>{
//     done(null,user);
// });

// passport.deserializeUser((user,done)=>{
//     done(null,user);
// });