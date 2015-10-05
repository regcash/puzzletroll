var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: false
    }
});

module.exports = sequelize;
