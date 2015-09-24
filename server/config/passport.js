var GoogleStrategy = require('passport-google-oauth2').Strategy;
var configAuth = require('./auth');
var query = require('../../db/queryHandler');

var User = require('../../db/models/User');

module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null,user.id);
  });

  passport.deserializeUser(function(id, done){
    query.findUserById(id, function(err, user){
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({

    clientID      : configAuth.googleAuth.clientID,
    clientSecret  : configAuth.googleAuth.clientSecret,
    callbackURL   : configAuth.googleAuth.callbackURL

  },
  function(token, refreshToken, profile, done){

    process.nextTick(function(){

      query.findUser({ 'google.id' : profile.id }, function(err,user){
        if(err){
          return done(err);
        }
        if(user){
          return done(null, user);
        }else{
          var newUser = new User();

          newUser.googleId = profile.id;
          newUser.googleToken = token;
          newUser.name = profile.displayName;
          newUser.email = profile.emails[0].value;

          newUser.save(function(err){
            if(err){
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });


  }));

};
