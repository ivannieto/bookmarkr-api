// ---------------------------------------------------------

// Podemos pasar multiples callbacks a las rutas
// Con next() le decimosd que debe ejecutar el siguiente callback
app.get('/example/b', function(req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function(req, res) {
    res.send('Hello from B!')
})

// ---------------------------------------------------------

// Un array de callbacks puede manejar una sola ruta
var cb0 = function(req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function(req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function(req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])