var passport = require('passport');
var query = require('../db/queryHandler.js');

module.exports = {

//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			var params = req.url.substring(1).split('/');
			if(params[1]){
				if(params[1]==="me"){
					res.end(JSON.stringify(req.user.id));
				} 
				else if (params[1] === 'checkChallenges') {
					query.findUserSolvedChallenges({id: req.user.id})
						.then(function (data) {
							console.log(data);
							res.send(data);
						})
						.catch(function (err) {
							console.error(err);
							res.send(404);
						})
				}
				else{
					query.findUser({name: params[1]})
						.then(function(data){
							res.send(data);
						})
						.catch(function (err) {
							console.error(err);
							res.send();
						});
				}
			}else{
				query.getUsers()
				.then(function (data) {
					res.send(data);
				})
				.catch(function(err){
					console.error('Get users error: ', err);
					res.send();
				});
			}
			
			
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
			
			var params = req.url.substring(1).split('/')
			if(params[1]){
				query.findChallenge({name: params[1]})
					.then(function (data) {
						res.send(data);
					})
					.catch(function (err) {
						console.error(err);
						res.send();
					});
			}else{
				query.getChallenges()
					.then(function (data) {
						res.send(data);
					})
					.catch(function(err){
						console.log('Get challenges error: ', err);
						res.send();
					});
			}
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
			console.log('get message(s)');
			// console.log('req.url',req.url);
			var params = req.url.substring(1).split('/');
			if(params[1]){
				query.findMessages({challenge : params[1]})
					.then(function (data) {
						
						res.send(data);
					})
					.catch(function (err) {
						console.error(err);
						res.send();
					});
			}else{
				query.getMessages()
					.then(function (data) {
						res.send(data);
					})
					.catch(function (err) {
						console.error('messages get error: ', err);
					});
			}
		},
		post : function (req, res, next) {
			console.log('messages post');
			var message = req.body;
			console.log('handler message post>>>>>>>>>',message);
			query.createMessage(message)
				.then(function (response) {
					res.send('post okay!! posted: ' + message.toString());
				})
				.catch(function (err) {
					console.error(err);
					res.send('error in post message');
				});
		}
	}

};
