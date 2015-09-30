var Challenge = require('./Challenge');
var User = require('./User');

Challenge.hasMany(User);
User.hasMany(Challenge);