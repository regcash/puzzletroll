var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL, "b96749e1b4baf1", "5bc97a68", {
  define: {
    timestamps: false
    }
});

module.exports = sequelize;
