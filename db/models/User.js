var sequelize = require('sequelize');
var db = require('../db');

var User = db.define('User', {
  name: sequelize.STRING,
  email: sequelize.STRING,
  completedChallenges: sequelize.INTEGER,
  authoredChallenges: sequelize.INTEGER,
  solvedScore: sequelize.INTEGER,
  contributedScore: sequelize.INTEGER,
  isMod: sequelize.BOOLEAN,
  googleId: sequelize.STRING,
  googleToken: sequelize.STRING
});

User.sync();

module.exports = User;
