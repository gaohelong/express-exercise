var express = require('express');
var router = express.Router();
const crypto = require('../tools/crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = { name: 'cloud', age: 18 };
    res.render('index', { title: 'Express' , cipher: crypto.cipherProc(data)});
});

/* app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。 */
// router.all('/', function(req, res, next) {
//     res.render('index', { title: 'Express' , cipher: 'all'});
// });

module.exports = router;
