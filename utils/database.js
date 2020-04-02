const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-mysql', 'root', 'nodecomplete', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;