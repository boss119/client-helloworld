const calculate = require('../models/calculator');

const AddPage = (req, res) => {
  if (req.query.a && req.query.b) {
    const result = calculate.add(req.query.a, req.query.b);
    if (!result.message) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else if (!req.query.a && req.query.b) {
    res.status(400).json({
      message: 'Input a not found value.',
    });
  } else if (req.query.a && !req.query.b) {
    res.status(400).json({
      message: 'Input b not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input a and b not found value.',
    });
  }
};

const MinusPage = (req, res) => {
  if (req.query.a && req.query.b) {
    const result = calculate.minus(req.query.a, req.query.b);
    if (!result.message) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else if (!req.query.a && req.query.b) {
    res.status(400).json({
      message: 'Input a not found value.',
    });
  } else if (req.query.a && !req.query.b) {
    res.status(400).json({
      message: 'Input b not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input a and b not found value.',
    });
  }
};

const MultiplePage = (req, res) => {
  if (req.query.a && req.query.b) {
    const result = calculate.multiple(req.query.a, req.query.b);
    if (!result.message) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else if (!req.query.a && req.query.b) {
    res.status(400).json({
      message: 'Input a not found value.',
    });
  } else if (req.query.a && !req.query.b) {
    res.status(400).json({
      message: 'Input b not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input a and b not found value.',
    });
  }
};

const DevidePage = (req, res) => {
  if (req.query.a && req.query.b) {
    const result = calculate.devide(req.query.a, req.query.b);
    if (!result.message) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else if (!req.query.a && req.query.b) {
    res.status(400).json({
      message: 'Input a not found value.',
    });
  } else if (req.query.a && !req.query.b) {
    res.status(400).json({
      message: 'Input b not found value.',
    });
  } else {
    res.status(400).json({
      message: 'Input a and b not found value.',
    });
  }
};

module.exports = {
  AddPage,
  MinusPage,
  MultiplePage,
  DevidePage,
};
