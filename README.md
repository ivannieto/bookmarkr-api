# Bookmarks API

This API lets user control his bookmarks brought from Chrome/Firefox... in JSON format.

Makes use of **MongoDB** and the **mongoose** driver to store and manage data.

Build
==========================================================


```Javascript
git clone https://...................git \
cd ........ \
npm install \
npm start \
```

Follow instructions in terminal and open http:// [SERVER_URL] /api

Routes
==========================================================

By default in dev mode, [SERVER_URL] is [http://localhost:9200](http://localhost:9200), please, configure it to your liking or needs.

| Method | HTTP Method | Route |
|---|---|---|
| **save** | POST | http:// [SERVER_URL] /api/bookmark |
| **readById** | GET | http:// [SERVER_URL] /api/bookmark/:id |
| **readAll** | GET | http:// [SERVER_URL] /api/bookmarks |
| **update** | PUT | http:// [SERVER_URL] /api/bookmark |
| **deleteById** | DELETE | http:// [SERVER_URL] /api/bookmark/:id |
| **deleteAll** | DELETE | http:// [SERVER_URL] /api/bookmarks |

