var sequelize = require('./db');
var User = require('./models/User');
var Challenge = require('./models/Challenge');

module.exports.getUsers = function() {
  User.findAll({});
}

module.exports.getChallenges = function() {
  Challenge.findAll({});
}

module.exports.findUser = function(user)  {
  User.findOne({
    where: {
      name: user
    }
  });
}

module.exports.findChallenge = function(challenge)  {
  Challenge.findOne({
    where: {
      name: challenge
    }
  })
}

module.exports.findUserSolvedChallenges = function(user)  {

}

module.exports.ChallengeSolvedUsers = function(challenge) {

}

module.exports.createUser = function(user)  {

}

module.exports.createChallenge = function(challenge)  {
  
}  
