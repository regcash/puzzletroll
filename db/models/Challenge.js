var sequelize = require('../db');
var User = require('./User');

var Challenge = sequelize.define('Challenge', {
  name: sequelize.STRING,
  prompt: sequelize.STRING,
  answer: sequelize.STRING,
  score: sequelize.INTEGER,
  difficulty: sequelize.INTEGER
});

Challenge.sync();

Challenge.belongsToMany(User, { through: UserChallenges });

module.exports = Challenge;