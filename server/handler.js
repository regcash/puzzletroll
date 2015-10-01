var passport = require('passport');
var query = require('../db/queryHandler.js');

var sendOrCatch = function(promise, req, res, errMessage, sendMessage){
	promise
		.then(function(data){
			sendMessage ? console.log(sendMessage, data) : null;
			res.send(data);
		})
		.catch(function(err){
			errMessage ? console.error(errMessage, err) : console.error(err);
			res.send();
		})
};

module.exports = {

//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			var params = req.url.substring(1).split('/');
			if(params[1]){
				if(params[1]==="me"){
					var user = req.user.dataValues;
					user.googleId = '';
					user.googleToken = '';
					res.send(JSON.stringify(user));
				} 
				else if (params[1] === 'checkChallenges') {
					sendOrCatch(query.findUserSolvedChallenges({id: req.user.id}), req, res);
				}
				else{
					sendOrCatch(query.findUser({id: params[1]}), req, res, 
						'get user by id error: ');
				}
			}else{
				sendOrCatch(query.getUsers(), req, res,
					'get all users error: ');
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
			var params = req.url.substring(1).split('/');

			if(params[1]){
				sendOrCatch(query.findChallenge({name: params[1]}), req, res,
					'get challenge by Id error: ');
			}else{
				sendOrCatch(query.getChallenges(), req, res,
					'get all challenges error: ');
			}
		},
		post : function (req, res, next) {
			console.log('challenges post');
			sendOrCatch(query.createChallenge(req.body), req, res, 
				'challenge failed to post');
		}
	},

	//handle requests for messages
	messages : {
		get : function (req, res, next) {
			console.log('get message)');
			var params = req.url.substring(1).split('/');
			if(params[1]){
				sendOrCatch(query.findMessages({challenge : params[1]}), req, res);
			}else{
				sendOrCatch(query.getMessages(), req, res ,
					'messages get error: ');
			}
		},
		post : function (req, res, next) {
			console.log('messages post');
			var message = req.body;
			sendOrCatch(query.createMessage(message),req ,res,
				'error in post message: ');
		}
	}
	

};
