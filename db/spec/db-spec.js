var mysql = require('mysql');
var sequelize = require('sequelize'); 
var expect = require('../../node_modules/chai/chai').expect;
var query = require('../queryHandler');
var User = require('../models/User');
var Challenge = require('../models/Challenge');

describe("Puzzle Troll DB Spec", function() {

  it("Should create a new user", function() {
    query.createUser({name: 'lol'}).then(function(user) {
      expect(user.dataValues.name).to.eql('lol');
    });
  });

  it("Should create a new challenge", function()  {
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
  });

  it("Should find a specified user", function()  {
    query.findUser({name: 'lol'}).then(function(user) {
      expect(user.name).to.eql('lol');
    }).catch(function(err)  {
      console.error("CANNOT FIND A SPECIFIED USER: ", err);
    });
  });

  it("Should find a specifed challenge", function()  {
    query.findChallenge({name: 'lol'}).then(function(challenge) {
      expect(challenge.answer).to.eql('kekles');
    }).catch(function(err)  {
      console.error("CANNOT FIND A SPECIFIED CHALLENGE: ", err);
    });
  });

  it("Should add a completed challenge for the user (and vice versa)", function()  {
    query.addChallengeCompleted({name: 'lol'}, {
      name: 'lol',
      prompt: 'dsfjls;kd',
      answer: 'kekles',
      score: 100,
      difficulty: 100
    });
    // expect().to.eql();
  });

  it("Should find all challenges solved by a specifed user", function() {

  });

  it("Should find all users who solved a specified challenge", function() {

  });

  it("Should remove a specified user", function() {
    query.createUser({name: 'why'}).then(function(user) {
      query.removeUser(user);
    });
    query.findUser({name: 'why'}).then(function(user) {
      expect(user).to.eql(null);
    }).catch(function(err)  {
      console.error("CANNOT REMOVE A SPECIFIED USER: ", err);
    });;
  });

  it("Should remove a specified challenge", function()  {
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
  });
});