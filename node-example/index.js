let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/china', function (req, res) {
    res.send('China!');
});

app.post('/user', function (req, res) {
    res.send('User!');
});

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
