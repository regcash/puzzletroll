var mysql = require('mysql');
var sequelize = require('sequelize'); 
var expect = require('../../node_modules/chai/chai').expect;
var query = require('../queryHandler');
var User = require('../models/User');
var Challenge = require('../models/Challenge');
var UserChallenge = require('../models/relations');

describe("Puzzle Troll DB Spec", function() {

  it("Should create a new user", function(done) {
    query.createUser({name: 'lol'}).then(function(user) {
      expect(user.dataValues.name).to.eql('lol');
    });
    done();
  });

  it("Should create a new challenge", function(done)  {
    query.createChallenge({
      name: 'lol',
      prompt: 'dsfjls;kd',
      answer: 'kekles',
      score: 100,
      difficulty: 100
    }).then(function(challenge) {
      expect(challenge.dataValues.name).to.eql('lol');
      expect(challenge.dataValues.prompt).to.eql('dsfjls;kd');
      expect(challenge.dataValues.answer).to.eql('kekles');
      expect(challenge.dataValues.score).to.eql(100);
      expect(challenge.dataValues.difficulty).to.eql(100);
      expect(challenge.dataValues).to.be.an('object');
    }).catch(function(err)  {
      console.log('LEGOS: ', err);
    });

    done();
  });

  it("Should find a specified user", function(done)  {
    query.findUser({name: 'lol'}).then(function(user) {
      expect(user.dataValues.name).to.eql('lol');
    }).catch(function(err)  {
      console.error("CANNOT FIND A SPECIFIED USER: ", err);
    });

    done();
  });

  it("Should find a specifed challenge", function(done)  {
    query.findChallenge({name: 'lol'}).then(function(challenge) {
      expect(challenge.dataValues.answer).to.eql('kekles');
    }).catch(function(err)  {
      console.error("CANNOT FIND A SPECIFIED CHALLENGE: ", err);
    });

    done();
  });

  it("Should add a challenge completed for the user", function(done)  {
    query.findUser({name: 'lol'}).then(function(user) {
      query.findChallenge({name: 'lol'}).then(function(challenge) {
        query.addChallengeCompleted(user, challenge);
      });  
    });
    done();
  });

  it("Should find all challenges solved by a specifed user", function(done) {
    query.findUser({name: 'lol'}).then(function(user) {
      query.getJoinUserId(user.dataValues).then(function(userJoin)  {
        query.getChallengesForUser(userJoin[0].dataValues).then(function(challenges)  {
          expect(challenges[0].dataValues.id).to.eql(2);
          expect(challenges[0].dataValues.name).to.eql('lol');
        });
      });
    });
    done();
  });


  it("Should find all users who solved a specified challenge", function(done) {
    query.findChallenge({name:'lol'}).then(function(challenge)  {
      query.getJoinChallengeId(challenge.dataValues).then(function(challengeJoin)  {
        query.getUsersForChallenge(challengeJoin[0].dataValues).then(function(users)  {
          expect(users[0].dataValues.id).to.eql(2);
          expect(users[0].dataValues.name).to.eql('lol');
        })
      });
    });
    done();
  });

  it("Should update a user's score", function(done)  {
    query.findUser({id: 2}).then(function(user) {
      console.log(user.dataValues);
      query.updateUserChallengeScore(user.dataValues, 10);
      query.updateUserContributedScore(user.dataValues, 1);
    });

    query.findUser({id: 2}).then(function(user) {
      expect(user.dataValues.solvedScore).to.eql(10);
      expect(user.dataValues.contributedScore).to.eql(1);
    });
    done();
  });


  it("Should remove a specified user", function(done) {
    query.createUser({name: 'why'}).then(function(user) {
      query.removeUser(user);
    });
    query.findUser({name: 'why'}).then(function(user) {
      expect(user).to.eql(null);
    }).catch(function(err)  {
      console.error("CANNOT REMOVE A SPECIFIED USER: ", err);
    });
    done();
  });

  it("Should remove a specified challenge", function(done)  {
    query.createChallenge({
      name: 'why',
      prompt: 'why',
      answer: 'why',
      score: 100,
      difficulty: 100
    }).then(function(challenge) {
      query.removeChallenge(challenge);
    });

    query.findChallenge({name: 'why'}).then(function(challenge) {
      expect(challenge).to.eql(null);
    }).catch(function(err)  {
      console.error("CANNOT REMOVE A SPECIFIED CHALLENGE: ", err);
    });
    done();
  });
});