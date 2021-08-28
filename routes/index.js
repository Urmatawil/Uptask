const express = require('express')
//requerimos la funcion de enrutamiento de express
const router = express.Router()
//importamos el contenido de app controller
const appController = require('../controller/appController')

//ruta para el home
module.exports = function () {
    router.get('/', appController.appHome)

    return router
}

