const express = require('express')
//requerimos la funcion de enrutamiento de express
const router = express.Router()
//importamos el contenido de app controller
const appController = require('../controller/appController')
//validamos con express validator con body el req.body
const { body } = require('express-validator')


module.exports = function () {
    //ruta para el home
    router.get('/', appController.appHome)
    //ruta get y post de nuevo proyecto
    router.get('/new-project', appController.appNewProject)
    router.post('/new-project',
        body('name').not().isEmpty().trim().escape(),
        appController.newProject)
    return router
}

