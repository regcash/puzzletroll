var passport = require('passport');
var query = require('../db/queryHandler.js');

module.exports = {

//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			res.status(200);
			query.getUsers()
				.then(function(data){
					res.send(data);
				})
				.catch(function(err){
					console.error('Get users error: ', err);
				});
		},
		post : function (req, res, next)	{
			// authentication takes care of all user posting to db
			console.log('user post');
			res.status(300);
			res.send('user posting handled by Oauth')
			// res.redirect('/');
		}
	},
	
//handle challenges requests
	challenges : {
		get : function (req, res, next) {
			console.log('challenges get');
			res.status(200);
			query.getChallenges()
				.then(function(data){
					res.send(data);
				})
				.catch(function(err){
					console.log('Get challenges error: ', err);
				});

		},
		post : function (req, res, next) {
			console.log('challenges post');
			res.status(201);
			query.createChallenge(req.body)
				.then(function(){
					res.send('Challenge posted successfully!')
				})
				.catch(function(err){
					res.send('Challenge failed to post: ', err);
				});
		}
	},
	messages : {
		
	}

};
