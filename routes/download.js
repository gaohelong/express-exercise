const express = require('express');
const path = require('path');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.download(path.resolve(__dirname, '../download/test.pdf'));
});

module.exports = router;
