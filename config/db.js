const { Sequelize } = require('sequelize');
//configuramos la conexion con la base de datos

const db = new Sequelize('uptaskNode', 'root', '123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db