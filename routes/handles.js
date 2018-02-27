let express = require('express');
let router = express.Router();
let data = {};

/* function */
// router.get('/', function(req, res, next) {
//     console.log('save log');
//     data.logPath = '/usr/log/1.log';
//     next();
// }, function(req, res, next) {
//     res.render('handles', { title: 'handles', data: data });
// });

/* array */
// const logHandle1 = function(req, res, next) {
//     console.log('save log 1');
//     data.logPath = '/usr/log/1.log';
//     next();
// };
//
// const logHandle2 = function(req, res, next) {
//     res.render('handles', { title: 'handles 1', data: data });
// };
//
// router.get('/', [logHandle1, logHandle2]);

/* function、array */
const logHandle = function(req, res, next) {
    console.log('save log 2');
    data.logPath = '/usr/log/1.log';
    next();
};

router.get('/', [logHandle], function(req, res, next) {
    res.render('handles', { title: 'handles 2', data: data });
});

module.exports = router;
