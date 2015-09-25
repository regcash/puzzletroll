var Challenge = require('./Challenge');
var User = require('./User');

Challenge.belongsToMany(User, { through: 'UserChallenge' });
User.belongsToMany(Challenge, { through: 'UserChallenge' });