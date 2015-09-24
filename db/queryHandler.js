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

module.exports.findUserById = function(id)  {
  User.findOne({
    where: {
      id: id
    }
  });
}

module.exports.findUserSolvedChallenges = function(user)  {
}

module.exports.ChallengeSolvedUsers = function(challenge) {
}

module.exports.createUser = function(user)  {
  User.create({
    name: user.userName,
    completedChallenges: 0,
    authoredChallenges: 0,
    solvedScore: 0,
    contributedScore: 0,
    isMod: false

  });
}

module.exports.createChallenge = function(challenge)  {
  Challenge.create({
    name: challenge.name,
    prompt: challenge.prompt,
    answer: challenge.answer,
    score: challenge.score,
    difficulty: challenge.difficulty
  });
}

module.exports.removeUser = function(user)  {
  User.findOne({
    where: {
      name: user
    }
  }).destroy();
}

module.exports.removeChallenge = function(challenge)  {
  Challenge.findOne({
    where: {
      name: challenge
    }
  }).destroy();
}
 
