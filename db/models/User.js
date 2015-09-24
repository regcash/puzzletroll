var sequelize = require('../db');

var User = sequelize.define('User', {
  name: sequelize.STRING,
  completedChallenges: sequelize.INTEGER,
  authoredChallenges: sequelize.INTEGER,
  solvedScore: sequelize.INTEGER,
  contributedScore: sequelize.INTEGER,
  isMod: sequelize.BOOLEAN
});

module.exports = User;