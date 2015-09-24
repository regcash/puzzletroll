var passport = require('passport');

module.exports = {

//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			res.status(200).send({});
		},
		post : function (req, res, next)	{
			console.log('user post');
			res.status(201).send('user posted.');
		}
	},
	
//handle challenges requests
	challenges : {
		get : function (req, res, next) {
			console.log('challenges get');
			res.status(200).send({});
		},
		post : function (req, res, next) {
			console.log('challenges post');
			res.status(201).send('challenge posted');
		}
	}

};
