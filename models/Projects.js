const { DataTypes } = require('sequelize');

//creamos el modelo de la base de datos

const db = require('../config/db')

const Projects = db.define('Projects', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING
})

module.exports = Projects;