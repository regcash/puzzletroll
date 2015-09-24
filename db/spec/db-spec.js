var mysql = require('mysql');
var sequelize = require('sequelize'); 
var expect = require('../../node_modules/chai/chai').expect;
var query = require('../queryHandler');
var User = require('../models/User');
var Challenge = require('../models/Challenge');

describe("Puzzle Troll DB Spec", function() {

  it("Should create a new user", function() {
    query.createUser({userName: 'lol'}).then(function(user) {
      expect(user.dataValues.name).to.eql('lol');
    });
  });

  it("Should create a new challenge", function()  {
    query.createChallenge({
      userName: 'lol'
    }).then(function(challenge) {
      expect(user.dataValues.name).to.eql('lol');
    });

  });

  it("Should get all users", function() {

  });

  it("Should get all challenges", function()  {

  });

  it("Should find a specified user", function()  {

  });

  it("Should find a specifed challenge", function()  {

  });

  it("Should find all challenges solved by a specifed user", function() {

  });

  it("Should find all users who solved a specified challenge", function() {

  });

  it("Should remove a specified user", function() {

  });

  it("Should remove a specified challenge", function()  {

  });
});