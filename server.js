// Inicio de servidor, se pone a la escucha en un puerto determinado
let app = require('./app')
let PORT = 9200;
let mongoose = require('mongoose')

let server = mongoose.connect('mongodb://localhost:27017/bookmarks', (err, res) => {
    if (err) {

        // En caso de error imprime el mensaje de error en consola
        console.log(err)
        throw err

    } else {

        console.log('Conexion a MongoDB exitosa, iniciando servidor....')
            // En caso de conexion correcta se enciende el servidor
        app.listen(PORT, function() {
            console.log('Server funcionando en http://localhost:' + PORT + '/api')
        });

    }
});

module.exports = server