var Challenge = require('./Challenge');
var User = require('./User');

User.hasMany(Challenge);
Challenge.hasMany(User);
