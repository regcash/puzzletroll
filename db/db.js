var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://b96749e1b4baf1:5bc97a68@us-cdbr-iron-east-03.cleardb.net/heroku_468f49dcc4283fd?reconnect=true', 'root', '', {
  define: {
    timestamps: false
    }
});

module.exports = sequelize;
