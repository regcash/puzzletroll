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
//To get all challenges solved by a user, you must first
//get the id in the join table. the data returned in the
//promise is also an array, so you must access the data
//in the first index, ex: getChallengesForUser(user[0].dataValues);
//look at the tests for passing in and using data for these methods properly.
//ps the methods had to be seperated because of how promises work.
module.exports.getJoinUserId = function(user)  {
  return UserChallenge.findAll({
    where: {
      userId: user.id
    }
  });
}

module.exports.getChallengesForUser = function(userJoin) {
  return Challenge.findAll({
    where: {
      id: userJoin.challengeId
    }
  });
}

module.exports.getJoinChallengeId = function(challenge) {
  return UserChallenge.findAll({
    where: {
      challengeId: challenge.id
    }
  });
}

module.exports.getUsersForChallenge = function(challengeJoin) {
    return User.findOne({id: challengeJoin.userId});
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
    userId: message.userId,
    challenge: message.challenge
  });
};

module.exports.addChallengeCompleted = function(user, challenge)  {
  UserChallenge.create({
    userId: user.id,
    challengeId: challenge.id
  });

  return User.findOne({id: user.id}).then(function(user) {
    user.completedChallenges += 1;
    user.save();
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

module.exports.updateUserChallengeScore = function(user, points)  {
  return User.findOne({
    where: {
      id : user.id
    }
  }).then(function(user)  {
    user.solvedScore += points;
    user.save();
  });
}

module.exports.updateUserContributedScore = function(user, points)  {
  return User.findOne({
    where: {
      id : user.id
    }
  }).then(function(user)  {
    user.contributedScore += points;
    user.save();
  });
}