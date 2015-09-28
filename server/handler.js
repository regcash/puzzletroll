var passport = require('passport');
var query = require('../db/queryHandler.js');

module.exports = {

//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			
			query.getUsers()
				.then(function(data){
					res.send(data);
				})
				.catch(function(err){
					console.error('Get users error: ', err);
					res.send();
				});
		},
		post : function (req, res, next)	{
			// authentication takes care of all user posting to db
			console.log('user post');
			
			// res.send('user posting handled by Oauth')
			res.redirect('/');
		}
	},
	
//handle challenges requests
	challenges : {
		get : function (req, res, next) {
			console.log('challenges get');
			
			query.getChallenges()
				.then(function(data){
					console.log('challenges data',data);
					res.send(data);
				})
				.catch(function(err){
					console.log('Get challenges error: ', err);
					res.send();
				});

		},
		post : function (req, res, next) {
			console.log('challenges post');
			
			query.createChallenge(req.body)
				.then(function(){
					res.send('Challenge posted successfully!');
				})
				.catch(function(err){
					res.send('Challenge failed to post: ', err);
				});
		}
	},

	//handle requests for messages
	messages : {
		get : function (req, res, next) {
			console.log(req.url);
		
			return query.getMessages()
				.then(function(data){
					
					console.log(data);
					res.send(data);
				})
				.catch(function(err){
					console.error('messages get error: ', err);
				});
		},
		post : function (req, res, next) {
			console.log('messages post');
			query.postMessage(message)
				.then(function(response){
					// res.send(response);
				})
				.catch(function(err){
					console.error(err);
				});
		}
	}

};
