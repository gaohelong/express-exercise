var express = require('express');
var router = express.Router();
const crypto = require('../tools/crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = { name: 'cloud', age: 18 };
    res.render('index', { title: 'Express' , cipher: crypto.cipherProc(data)});
});

module.exports = router;
