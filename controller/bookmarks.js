let Bookmark = require('../models/bookmark')

var test = (req, res) => {
    res.status(200).send('FAVORITOS')
}

let create = (req, res) => {
    // req.body obtiene todos los datos que llegan de request
    var params = req.body
    var bookmark = new Bookmark()
    bookmark.id = params.id
    bookmark.dateAdded = params.dateAdded
    bookmark.index = params.index
    bookmark.parentId = params.parentId
    bookmark.title = params.title
    bookmark.url = params.url

    bookmark.save((err, bookmarkInsert) => {
        if (err) {
            res.status(500).send("\nNo se ha podido realizar la inserción")
            console.log(err + "\nNo se ha podido realizar la inserción")
        } else {
            res.status(200).send({ resultado: "Inserción correcta", datos: bookmarkInsert })
        }
    })
}

let readById = (req, res) => {
    var bookmarkID = req.params.id
    Bookmark.find({ _id: bookmarkID }, (err, bookmark) => {
        if (err) {
            res.status(500).send({ error: "Error interno del servidor" })
            console.log("Error")
        } else {
            res.status(200).send({ bookmark })
        }
    });
}

let readAll = (req, res) => {
    Bookmark.find({}, (err, bookmarks) => {
        if (err) {
            res.status(500).send("\nNo se ha podido realizar la lectura")
            console.log("Error")
        } else {
            res.status(200).send({ bookmarks })
        }
    });
}

let update = (req, res) => {
    var bookmarkID = req.params.id
    var params = req.body
    Bookmark.findByIdAndUpdate({ _id: bookmarkID }, params, (err, bookmark) => {
        if (err) {
            res.status(500).send("\nNo se ha podido realizar la lectura")
            console.log("Error")
        } else {
            res.status(200).send({ bookmark })
        }
    });
}

let deleteById = (req, res) => {
    var bookmarkID = req.params.id
    Bookmark.findByIdAndRemove({ _id: bookmarkID }, (err, bookmark) => {
        if (err) {
            res.status(500).send("\nNo se ha podido realizar la lectura")
        } else {
            res.status(200).send("Se ha borrado el documento de la base de datos")
        }
    })
}

let deleteAll = (req, res) => {
    Bookmark.remove()
    res.status(200).send({ datos: "Borrados" })
}

module.exports = { test, create, readById, readAll, update, deleteById, deleteAll }