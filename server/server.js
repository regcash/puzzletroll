var express = require('express');
var router = require('./router');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');


var app = express();
module.exports = app;

// user morgan as a logger for debugging
app.use(morgan('dev'));

app.use(bodyParser.json());
require('../server/config/passport')(passport);

app.use(session({
  secret: 'supersecretsecretcode',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));

app.use(passport.initialize());
app.use(passport.session());


var isLoggedIn = function(req,res,next){
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()){
    return next();
  }
  //VV toggle out below to turn on/off authentication
  res.redirect('/');
  // return next();
};

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/home/',
                    failureRedirect : '/'
            }));

app.get('/home', isLoggedIn, function(req,res,next){
  res.sendFile('home.html', {root: __dirname + '/../client/home/'});
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.use('/api', isLoggedIn, router);

app.use(express.static(__dirname + '/../client/'));
app.listen(process.env.PORT || 8080);

