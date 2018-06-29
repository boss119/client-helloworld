/* โหลด Express มาใช้งาน */
var express = require('express');
var app = express();
var controller = require('../controllers/AddController');

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;


/* Routing */
app
  .get('/', (req, res) =>  res.send('<h1>Hello Heroku and Node.js</h1>'))
  .get('/add', controller.getAddPage)
  .listen(port, () => console.log(`Listening on ${ port }`))
