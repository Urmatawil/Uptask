const { DataTypes } = require('sequelize');
//creamos el modelo de la base de datos
const db = require('../config/db')
const slug = require('slug')
const { nanoid } = require('nanoid');

const Projects = db.define('Projects', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    hooks: {
        beforeCreate(project) {
            //slug es una libreria para hacer string url
            const url = slug(project.name).toLowerCase();
            //luego pasamos el url convertido para que se cargue en la BDs
            //nanoid para generar un id unico
            project.url = `${url}-${nanoid()}`
        },
    }
})

module.exports = Projects;