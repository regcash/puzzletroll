var db = require('../db');
var Challenge = require('./Challenge');
var User = require('./User');

var UserChallenge = db.define('UserChallenge', {});

Challenge.belongsToMany(User, {through: UserChallenge, foreignKey: 'challengeId'});
User.belongsToMany(Challenge, {through: UserChallenge, foreignKey: 'userId'});

UserChallenge.sync();

module.exports = UserChallenge;
