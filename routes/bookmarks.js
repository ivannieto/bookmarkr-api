let express = require('express')
let bookmarks = require('../controller/bookmarks')
let api = express.Router()

// Test
api.get('/test', bookmarks.test)

// API Routes
api.post('/bookmark', bookmarks.create)
api.get('/bookmark/:id', bookmarks.readById)
api.get('/bookmarks', bookmarks.readAll)
api.put('/bookmark/:id', bookmarks.update)
api.delete('/bookmark/:id', bookmarks.deleteById)
api.delete('/bookmarks', bookmarks.deleteAll)

module.exports = api