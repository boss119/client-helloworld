var express = require('express');
var add = require('../src/add');

const getAddPage = (req, res) => {
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
};
module.exports = {getAddPage};
