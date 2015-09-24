var sequelize = require('sequelize');
var db = require('../db');


var User = db.define('User', {
  name: sequelize.STRING,
  completedChallenges: sequelize.INTEGER,
  authoredChallenges: sequelize.INTEGER,
  solvedScore: sequelize.INTEGER,
  contributedScore: sequelize.INTEGER,
  isMod: sequelize.BOOLEAN
});

User.sync();


module.exports = User;