// var db = require('/../db/db');

module.exports = {
//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			res.send();
		},
		post : function (req, res, next)	{
			console.log('user post');
			res.send();
		}
	},
//handle challenges requests
	challenges : {
		get : function (req, res, next) {
			console.log('challenges get');
			res.send();
		},
		post : function (req, res, next) {
			console.log('challenges post');
			res.send();
		}
	}

};