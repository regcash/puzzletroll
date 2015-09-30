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

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'supersecretsecretcode',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));


app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/home/',
                    failureRedirect : '/login'
            }));

app.get('/home', function(req,res,next){
  res.sendFile('home.html', {root: __dirname + '/../client/home/'});
});

app.use('/api', router);

app.use(express.static(__dirname + '/../client/'));
app.listen(process.env.PORT || 8080);
