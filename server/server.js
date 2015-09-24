var express = require('express');
var router = require('./router');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// user morgan as a logger for debugging
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(session({
	secret: 'supersecretsecretcode',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));

app.use('/', express.static(__dirname + '/../client/'));

app.use('/auth', router)

app.use('/api', router);

app.listen(process.env.PORT || 8080);