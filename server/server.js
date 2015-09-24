var express = require('express');
var router = require('./router');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();

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

app.use('/', express.static(__dirname + '/../client/'));

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/#/home',
                    failureRedirect : '/#/login'
            }));

app.use('/api', router);

app.listen(process.env.PORT || 8080);
