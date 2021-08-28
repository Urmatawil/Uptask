//importamos express
const express = require('express')
//rquerimos las rutas desde routes
const routes = require('./routes')
//creamos una app con express
const app = express()

app.use('/', routes())

//puerto donde se va a ejecutar el servidor
app.listen(3000)