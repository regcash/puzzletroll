var sequelize = require('./db');
var User = require('./models/User');
var Challenge = require('./models/Challenge');

module.exports.getUsers = function() {
  return User.findAll({});
}

module.exports.getChallenges = function() {
  return Challenge.findAll({});
}

module.exports.findUser = function(where)  {
  return User.findOne({
    where: where
  });
}

module.exports.findChallenge = function(challenge)  {
   return Challenge.findOne({
    where: {
      name: challenge
    }
  })
}

module.exports.findUserSolvedChallenges = function(user)  {
  return Challenge.findAll({
    where: {
      id: UserChallenges.findAll({
        UserId: user.id
      })
    }
  });
}

module.exports.ChallengeSolvedUsers = function(challenge) {
  return User.findAll({
    where: {
      id: UserChallenges.findAll({
        ChallengeId: challenge.id
      })
    }
  });
}

module.exports.createUser = function(user)  {
  return User.create({
    name: user.name,
    email: user.email,
    completedChallenges: 0,
    authoredChallenges: 0,
    solvedScore: 0,
    contributedScore: 0,
    isMod: false,
    googleId: user.googleId,
    googleToken: user.googleToken
  });
}


module.exports.createChallenge = function(challenge)  {
  return Challenge.create({
    name: challenge.name,
    prompt: challenge.prompt,
    answer: challenge.answer,
    score: challenge.score,
    difficulty: challenge.difficulty
  });
}

module.exports.removeUser = function(user)  {
  return User.findOne({
    where: {
      name: user
    }
  }).destroy();
}

module.exports.removeChallenge = function(challenge)  {
  return Challenge.findOne({
    where: {
      name: challenge
    }
  }).destroy();
}
 
