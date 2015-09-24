var sequelize = require('../db');
var User = require('./User');

var Challenge = sequelize.define('Challenge', {
  prompt: sequelize.STRING,
  answer: sequelize.STRING,
  score: sequelize.INTEGER,
  difficulty: sequelize.INTEGER
});

Challenge.hasMany(User);

module.exports = Challenge;