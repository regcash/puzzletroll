var sequelize = require('./db');
var User = require('./models/User');
var Challenge = require('./models/Challenge');
var Message = require('./models/Message');
var UserChallenge = require('./models/relations');
module.exports.getUsers = function() {
  return User.findAll({});
};

module.exports.getChallenges = function() {
  return Challenge.findAll({});
};

module.exports.getMessages = function () {
  return Message.findAll({});
};

module.exports.findUser = function(where)  {
  return User.findOne({
    where: where
  });
};

module.exports.findChallenge = function(where)  {
   return Challenge.findOne({
    where: where
  });
};

module.exports.findMessages = function(where) {
  return Message.findAll({
    where: where
  });
};

module.exports.findUserSolvedChallenges = function(user)  {
  return Challenge.findAll({ include:[User], where : { id: user.id } });
};

module.exports.ChallengeSolvedUsers = function(challenge) {
  return User.findAll({
    where: {
      id: UserChallenge.findAll({
        ChallengeId: challenge.id
      })
    }
  });
};

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
};


module.exports.createChallenge = function(challenge)  {
  return Challenge.create({
    name: challenge.name,
    prompt: challenge.prompt,
    answer: challenge.answer,
    score: challenge.score,
    difficulty: challenge.difficulty
  });
};

module.exports.createMessage = function(message) {
  return Message.create({
    name: message.name,
    message: message.message,
    challenge: message.challenge
  });
};

module.exports.addChallengeCompleted = function(user, challenge)  {
  User.findOne({
    where: {
      name: user.name
    }
  }).then(function(user)  {
    user.addChallenge(challenge);
  });

  Challenge.findOne({
    where: {
      name: challenge.name
    }
  }).then(function(challenge)  {
    challenge.addUser(user);
  });
};

module.exports.removeUser = function(user)  {
  return User.findOne({
    where: {
      name: user.name
    }
  }).then(function(user)  {
    user.destroy();
  });
};

module.exports.removeChallenge = function(challenge)  {
  return Challenge.findOne({
    where: {
      name: challenge.name
    }
  }).then(function(challenge) {
    challenge.destroy();
  });
};
