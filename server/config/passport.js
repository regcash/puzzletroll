var GoogleStrategy = require('passport-google-oauth2').Strategy;
var configAuth = require('./auth');
var query = require('../../db/queryHandler');

var User = require('../../db/models/User');

module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user.googleId);
  });

  passport.deserializeUser(function(id, done){
    query.findUser({googleId: id}).then(function(user){
      done(null, user);
    });
  });

  passport.use(new GoogleStrategy({

    clientID      : configAuth.googleAuth.clientID,
    clientSecret  : configAuth.googleAuth.clientSecret,
    callbackURL   : configAuth.googleAuth.callbackURL

  },
  function(token, refreshToken, profile, done){

    process.nextTick(function(){

      query.findUser({ 'googleId' : profile.id }).then(function(user){
        if(user){
          return done(null, user);
        }else{
          var newUser = {};
          newUser.googleId = profile.id;
          newUser.googleToken = token;
          newUser.name = profile.displayName;
          newUser.email = profile.emails[0].value;

          query.createUser(newUser).then( done(null, newUser) );
        }
      });
    });


  }));

};
