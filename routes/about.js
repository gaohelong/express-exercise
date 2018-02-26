const express = require('express');
const path = require('path');
const router = express.Router();

/* GET static file. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../views/static/about.html'));
});

module.exports = router;
