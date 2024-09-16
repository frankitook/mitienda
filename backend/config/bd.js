const { Sequelize } = require('sequelize');


const base = new Sequelize(
    'mitienda', 
    'root', 
    '123456789', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = base;