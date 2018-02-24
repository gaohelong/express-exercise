var express = require('express');
var router = express.Router();
const crypto = require('../tools/crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const encrypted = 'c6ccfcf64aec856cd074da8615e9ba0b7c160aab6be76a9326cfe671f6ad00b9';
    let decrypted = crypto.deCipherProc(encrypted);
    const deCipherObj = JSON.parse(decrypted);

    // res.send('respond with a resource');
    res.render('users', { title: 'users', deCipher: decrypted, deCipherObj: deCipherObj });
});

module.exports = router;
