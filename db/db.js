var Sequelize = require('sequelize');

var sequelize = new Sequelize('puzzletrolldb', 'root', '', {
  define: {
    timestamps: false
    }
});

module.exports = sequelize;