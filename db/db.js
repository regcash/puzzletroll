var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
