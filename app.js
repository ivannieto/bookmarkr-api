/**
 * Bookmarks API Restful
 */
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let api = require('./routes/bookmarks')

const PORT = 9200;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'X-API-KEY, Origin, Content-Type, \
        Accept,  \
        X-Requested-With, \
        Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

// Cada vez que vayamos a una ruta debera pasar por nuestra api determinada
app.use('/api', api)

// Para exportar varios modulos lo haremos {modulo, modulo, modulo....}
module.exports = app