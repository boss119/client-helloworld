/* โหลด Express มาใช้งาน */
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const calculatorController = require('../controllers/CalculatorController');

app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

/* ใช้ port 8081 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
const port = process.env.PORT || 8081;

/* Routing */
app
  .get('/', (req, res) => {
    res.send('Index!!');
  })
  .get('/hello', (req, res) => {
    res.send({
      title: 'This is HelloPage.',
    });
  })
  .post('/calculator', calculatorController);

app.listen(process.env.PORT || 8081, () => console.log(`Listening on ${port}`));

module.exports = app;
