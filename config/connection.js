const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize  = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;