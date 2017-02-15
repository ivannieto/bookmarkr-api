const mongoose = require('mongoose')
const assert = require('assert')
const bookmarks = require('../controller/bookmarks')
const moment = require('moment');
const app = require('../app')
const server = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')
const Bookmark = require('../models/bookmark')
const { expect } = require('chai')
chai.use(chaiHttp)

describe('testMochaTest', function() {
    it('should complete this test', function() {
        assert.ok(true)
    });
})


describe('testPathHome', function() {
    chai.request(app)
        .get('/api/bookmark')
        .query({ _id: '589acc5d0426f802ea136fe6', limit: 1 })
        .end(function(err, res) {
            expect(err).to.have.status(401);
            expect(res).to.have.status(200);
        });
})

describe('readBookmarkTest', function() {
    it('should read a Bookmark without error', function() {
        var bookmark = new Bookmark({
            _id: 123456789,
            dateAdded: new moment(),
            title: 'test-title',
            url: 'http://test.com',
            category: 'test-category',
            tags: ['tag1', 'tag2', 'tag3']
        });

        Bookmark.find({ _id: 123456789 }, (err) => {
            if (err) {
                assert.ok(false)
            } else {
                assert.ok(true)
            }
        })
    });
});

describe('createBookmarkTest', function() {
    it('should save a Bookmark without error', function() {
        var bookmark = new Bookmark({ dateAdded: new moment(), title: 'test-title', url: 'http://test.com', category: 'test-category', tags: ['tag1', 'tag2', 'tag3'] });
        bookmark.save(function(err) {
            if (err) {
                assert.equal(err.errors.dateAdded, 'Invalid date')
                assert.equal(err.errors.title, 'Invalid title')
                assert.equal(err.errors.url, 'Invalid URL')
                assert.equal(err.errors.category, 'Invalid category')
                assert.equal(err.errors.tags, 'Invalid tags')
                assert.equal(err.name, 'ValidationError');
            }
        });
    });
});