//importamos express
const express = require('express')
//rquerimos las rutas desde routes
const routes = require('./routes')
//importamos libreria path para poder manejar las files systems
const path = require('path')
//creamos una app con express
const app = express()
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