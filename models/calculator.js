const calculate = {
  a: null,
  b: null,
  total: null,
};

const error = {
  message: 'Incorrect input a or b value.',
};

function add(a, b) {
  if (a && b) {
    try {
      if (!Number.isNaN(parseInt(a, 10)) && !Number.isNaN(parseInt(b, 10))) {
        calculate.a = parseInt(a, 10);
        calculate.b = parseInt(b, 10);
        calculate.total = calculate.a + calculate.b;
        return calculate;
      }
    } catch (err) {
      console.error(`Error function add: ${err}`);
    }
  }
  return error;
}

function minus(a, b) {
  if (a && b) {
    try {
      if (!Number.isNaN(parseInt(a, 10)) && !Number.isNaN(parseInt(b, 10))) {
        calculate.a = parseInt(a, 10);
        calculate.b = parseInt(b, 10);
        calculate.total = calculate.a - calculate.b;
        return calculate;
      }
    } catch (err) {
      console.error(`Error function minus: ${err}`);
    }
  }
  return error;
}

function multiple(a, b) {
  if (a && b) {
    try {
      if (!Number.isNaN(parseInt(a, 10)) && !Number.isNaN(parseInt(b, 10))) {
        calculate.a = parseInt(a, 10);
        calculate.b = parseInt(b, 10);
        calculate.total = calculate.a * calculate.b;
        return calculate;
      }
    } catch (err) {
      console.error(`Error function multiple: ${err}`);
    }
  }
  return error;
}

function devide(a, b) {
  if (a && b) {
    try {
      if (!Number.isNaN(parseInt(a, 10))
          && !Number.isNaN(parseInt(b, 10))
          && parseInt(b, 10) !== 0) {

        calculate.a = parseInt(a, 10);
        calculate.b = parseInt(b, 10);
        calculate.total = calculate.a / calculate.b;
        return calculate;
      }
    } catch (err) {
      console.error(`Error function devide: ${err}`);
    }
  }
  return error;
}

module.exports = {
  add,
  minus,
  multiple,
  devide,
};
