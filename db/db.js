var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://localhost:3306/puzzletrolldb');

module.exports = sequelize;