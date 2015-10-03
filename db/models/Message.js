var sequelize = require('sequelize');
var db = require('../db');

var Message = db.define('Message', {
  name: sequelize.STRING,
  message: sequelize.STRING,
  challenge: sequelize.STRING,
  userId: sequelize.INTEGER
});

Message.sync();

module.exports = Message;
