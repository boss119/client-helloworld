/* โหลด Express มาใช้งาน */
var express = require('express');
var add = require('./add');

var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;

/* Routing */
app
  .get('/', (req, res) =>  res.send('<h1>Hello Heroku and Node.js</h1>'))
  .get('/add', (req, res) => {
    // let a = parseInt(req.body.a, 10);
    // let b = parseInt(req.body.b, 10);
    // if (!Number.isInteger(a) && !Number.isInteger(b)) {
    //   a = 0;
    //   b = 0;
    // } else if (!Number.isInteger(a)) {
    //   a = 0;
    // } else if (!Number.isInteger(b)) {
    //   b = 0;
    // }
    let a = parseInt(req.query.a, 10);
    let b = parseInt(req.query.b, 10);
    if (!Number.isInteger(a) && !Number.isInteger(b)) {
      a = 0;
      b = 0;
    } else if (!Number.isInteger(a)) {
      a = 0;
    } else if (!Number.isInteger(b)) {
      b = 0;
    }

    res.json({
      a: a,
      b: b,
      total: add(a, b)
    })
  })
  // .get('/add', (req, res) => {
  //   let a = req.query.a;
  //   let b = req.query.b;
  //   res.send('<h1>a = ' + a + `</h1>` + `<br>` + '<h1>b = ' + b + `</h1>` + `<br>` + '<h1>Total = ' + add(a, b) + `</h1>`);
  // })
  .listen(port, () => console.log(`Listening on ${ port }`))
