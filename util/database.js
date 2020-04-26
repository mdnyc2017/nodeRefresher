const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node_complete',
    'root',
    '16hundred', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;