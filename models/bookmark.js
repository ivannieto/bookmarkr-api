 let mongoose = require('mongoose')
 let Schema = mongoose.Schema

 BookmarkSchema = Schema({
     dateAdded: { type: Date, default: Date.now },
     title: String,
     url: String,
     category: String,
     tags: [String]
 })

 module.exports = mongoose.model('chrome_bookmarks', BookmarkSchema);