const express = require('express');
const router = express.Router();
const crypto = require('../tools/crypto');
const mysqlIpListProc = require('../component/dataProc/mysqlIpList');

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = { name: 'cloud', age: 18 };
    res.render('index', { title: 'Express' , cipher: crypto.cipherProc(data)});
});

/* app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。 */
// router.all('/', function(req, res, next) {
//     res.render('index', { title: 'Express' , cipher: 'all'});
// });

/* mysql */
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
	database: 'cdn_test'
});
connection.connect();
connection.query('SELECT * FROM ip ORDER BY id DESC LIMIT 2', function(err, res, fields) {
    if (err) throw err;

	if (res == '') {
		console.log('not data');
	} else {
        let procRes = mysqlIpListProc.listProc(res);
        console.log(procRes);
	}
});
connection.end();

module.exports = router;
