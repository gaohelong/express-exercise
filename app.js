const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const about = require('./routes/about');
const handles = require('./routes/handles');
const download = require('./routes/download');
const res = require('./routes/res');
const routerMatching = require('./routes/routerMatching');
const routerHandle = require('./routes/routerHandle');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 访问地址->http://localhost:3000/images/avatar.png.
// app.use('/static', express.static(path.join(__dirname, 'public'))); // 指定一个虚拟目录, 访问地址->http://localhost:3000/static/images/avatar.png.

/* router */
app.use('/', index);
app.use('/users', users);
app.use('/about', about);
app.use('/handles', handles);
app.use('/download', download);
app.use('/res', res);

// app.use(routerMatching);
app.use('/match', routerMatching);

app.route('/route/:id')
    .get(function(req, res) {
        res.send(`route get ${JSON.stringify(req.params)}`);
    })
    .post(function(req, res) {
        res.send('route post');
    });

app.use('/china', routerHandle);

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它.
app.use('/user/:id', function(req, res, next) {
    console.log(req.params);
    next();
});
// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求.
app.get('/user/:id', function(req, res, next) {
    res.send(`/user/:id -> ${JSON.stringify(req.params)}`);
});

// 如果需要在中间件栈中跳过剩余中间件，调用 next('route') 方法将控制权交给下一个路由。 注意： next('route') 只对使用 app.VERB() 或 router.VERB() 加载的中间件有效。
// 一个中间件栈，处理指向 /detail/:id 的 GET 请求
app.get('/detail/:id', function (req, res, next) {
    // 如果 detail id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
        // 否则将控制权交给栈中下一个中间件
    else next(); //
}, function (req, res, next) {
    // 渲染常规页面
    // res.render('regular');
	res.send('regular');
});

// 处理 /detail/:id， 渲染一个特殊页面
app.get('/detail/:id', function (req, res, next) {
    // res.render('special');
	res.send('special');
});

/* catch 404 and forward to error handler */
app.use(function(req, res, next) {
    // let err = new Error('Not Found');
    let err = new Error('你所访问的页面不存在!');
    err.status = 404;
    next(err);
});

/* error handler */
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
