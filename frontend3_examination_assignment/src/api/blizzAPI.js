require("dotenv").config();
const BnetStrategy = require("passport-bnet").Strategy;
const BNET_ID = process.env.BNET_ID;
const BNET_SECRET = process.env.BNET_SECRET;

console.log(BNET_ID);
console.log(BNET_SECRET);
console.log(BnetStrategy);

// let passport = "";

function passport(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: "https://localhost:3000/oauth/battlenet/callback",
      region: "eu",
  }, 
    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      console.log(refreshToken);
      return done(null, profile);
    }
  )
);
