var sequelize = require('../db');

var Challenge = sequelize.define('Challenge', {
  prompt: sequelize.STRING,
  answer: sequelize.STRING,
  score: sequelize.INTEGER,
  difficulty: sequelize.INTEGER
});

module.exports = Challenge;