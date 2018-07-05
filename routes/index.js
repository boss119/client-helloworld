/* โหลด Express มาใช้งาน */
const app = require('express')();
const bodyParser = require('body-parser');

const controller = require('../controllers/CalculatorController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
const port = process.env.PORT || 7777;


/* Routing */
app
  .get('/', (req, res) => res.send('<h1>Hello Heroku and Node.js</h1>'))
  .get('/add', controller.AddPage)
  .get('/minus', controller.MinusPage)
  .get('/multiple', controller.MultiplePage)
  .get('/devide', controller.DevidePage)
  .listen(port, () => console.log(`Listening on ${port}`));

module.exports = app;
