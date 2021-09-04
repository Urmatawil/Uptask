//importamos express
const express = require('express')
//rquerimos las rutas desde routes
const routes = require('./routes')
//importamos libreria path para poder manejar las files systems
const path = require('path')
//creamos una app con express
const app = express()
//importamos el archivo helpers para tener la data disponible en toda la app
const helpers = require('./config/helpers')
//conexion base de datos
const db = require('./config/db')
//importamos el modelo de la BD
require('./models/Projects')
db.sync()
    .then(() => console.log('Conexión exitosa.'))
    .catch(error => (console.error(error)))

//pasamos el vardump a toda la app
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump
    next()
})
app.use(express.urlencoded({ extended: true }))
//ubicar archivos estaticos, ejm CSS
app.use(express.static('public'))
//buscas las rutas creadas
app.use('/', routes())
//habiltar pug - view template
app.set('view engine', 'pug')
//configurar la ruta de las vistas, _dirname se refiere a la ruta raiz del proyecto
app.set('views', path.join(__dirname, './views'))


//puerto donde se va a ejecutar el servidor
app.listen(3000)