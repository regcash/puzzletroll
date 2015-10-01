var sequelize = require('sequelize');
var db = require('../db');

var Challenge = db.define('Challenge', {
  name: sequelize.STRING,
  prompt: sequelize.STRING,
  answer: sequelize.STRING,
  score: sequelize.INTEGER,
  difficulty: sequelize.INTEGER
});

Challenge.sync();

module.exports = Challenge;
