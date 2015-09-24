var sequelize = require('../db');
var Challenge = require('./Challenge');

var User = sequelize.define('User', {
  name: sequelize.STRING,
  completedChallenges: sequelize.INTEGER,
  authoredChallenges: sequelize.INTEGER,
  solvedScore: sequelize.INTEGER,
  contributedScore: sequelize.INTEGER,
  isMod: sequelize.BIT
});

User.sync();

User.belongsToMany(Challenge, { through: UserChallenges });

module.exports = User;