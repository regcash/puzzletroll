var Challenge = require('./Challenge');
var User = require('./User');

Challenge.belongsToMany(User, { through: 'UserChallenges' });
User.belongsToMany(Challenge, { through: 'UserChallenges' });