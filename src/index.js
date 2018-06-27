/* โหลด Express มาใช้งาน */
var app = require('express')();
var add = require('./add');

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;

/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Express Node.js</h1>');
});

app.get('/add', function (req, res) {
    let a = req.query.a;
    let b = req.query.b;
    let calculate = add
    res.send('<h1>a = ' + a + `</h1>` + `<br>` + '<h1>b = ' + b + `</h1>` + `<br>` + '<h1>Total = ' + calculate(a, b) + `</h1>`);
    // res.send('<h1>Total = ' + calculate(a, b) + `</h1>`);
});

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
