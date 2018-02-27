const express = require('express');
let app = express();
const path = require('path');
const router = express.Router();

/* res.end(): 终结响应处理流程. */
// router.get('/', function(req, res, next) {
//     // 终结响应处理流程.
//     // console.log(1);
//     // res.end();
//     // console.log(2);
//     
//     // 设置响应状态码终结响应处理流程.
//     console.log(3);
//     res.status(404).end();
//     console.log(4);
// });

/* res.json(): 发送一个 JSON 格式的响应. */
// router.get('/', function(req, res, next) {
//     // res.json(null); // null
//     res.json({ user: 'saber' }); // { user: 'saber' }
//     // res.status(500).json({ error: 'message' }); // { error: 'message' }
// });

/* res.jsonp(): 发送一个支持 JSONP 的 JSON 格式的响应. */
// router.get('/', function(req, res, next) {
//     // res.jsonp(null); // null
//     // res.jsonp({ user: 'saber' }); // { "user": "saber" }
//     // res.status(500).jsonp({ error: 'message' }); // { "error": "message" }
// 
//     // ?callback=foo
//     // res.jsonp({ user: 'saber' }); // foo({ "user": "saber" })
// 
//     /*
//       app.set('jsonp callback name', 'cb');
//       // ?cb=foo
//       res.status(500).jsonp({ error: 'message' }); // foo({ "error": "message" })
//     */
// });

/* res.redirect(): 重定向请求. */
// router.get('/', function(req, res, next) {
//     // res.redirect('https://github.com/gaohelong');
//     // res.redirect(301, '/about');
//     res.redirect('/users');
//     // res.redirect('../about');
//     // res.redirect('back');
// });


/* res.render(): 渲染视图模板. */
// router.get('/', function(req, res, next) {
//     // 直接渲染模版.
//     // res.render('res');
// 
//     // 给模版传参数.
//     // res.render('res', { title: 'renderParams' });
// 
//     // 如果指定一个回调,呈现的HTML字符串必须显式地发送.
//     res.render('res', { title: 'renderCallback' }, function(err, html) {
//         console.log(html);
//         res.send(html);
//     });
// });

/* res.send(): 发送各种类型的响应. */
// router.get('/', function(req, res, next) {
//     // res.send(new Buffer('whoop'));
//     // res.send({ some: 'json' });
//     // res.send('<p>some html</p>');
//     // res.status(404).send('Sorry, we cannot find that!');
//     // res.status(500).send({ error: 'something blew up' });
//     res.send([1,2,3]);
// 
//     /* 
//       res.set('Content-Type', 'text/html');
//       res.send(new Buffer('<p>some html</p>'));
//     */
// });

/* res.sendFile(): 以八位字节流的形式发送文件. */
// router.get('/', function(req, res, next) {
//     res.sendFile(path.resolve(__dirname, '../views/static/about.html'));
// });

/* res.sendStatus(): 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送. */
router.get('/', function(req, res, next) {
    res.sendStatus(200); // equivalent to res.status(200).send('OK')
    // res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
    // res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
    // res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    // res.sendStatus(2000); // equivalent to res.status(2000).send('2000')
});

module.exports = router;
