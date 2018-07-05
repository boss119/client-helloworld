const expect = require('chai').expect;
const calculate = require('../models/calculator');

describe('Sample unit tests class Calculate', () => {
  beforeEach(() => {
    calculate;
  });
  it('should return total = 10 when a = 5 add b = 5', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = calculate.add(a, b);
    // assert
    expect(10).to.be.equal(total.total);
  });

  it('should return total = 0 when a = -5 add b = 5', () => {
    // arrange
    const a = -5;
    const b = 5;
    // act
    const total = calculate.add(a, b);
    // assert
    expect(0).to.be.equal(total.total);
  });

  it('should return total = 10 when a = "5", b = "5"', () => {
    // arrange
    const a = '5';
    const b = '5';
    // act
    const total = calculate.add(a, b);
    // assert
    expect(10).to.be.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = "5", b = "a"', () => {
    // arrange
    const a = '5';
    const b = 'a';
    const total = calculate.add(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = "a", b = "b"', () => {
    // arrange
    const a = 'a';
    const b = 'b';
    const total = calculate.add(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Input a or b not found value." when a = "a", b = null', () => {
    // arrange
    const a = 'a';
    const total = calculate.add(a);
    // act
    const message = 'Input a or b not found value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return total = 0 when a = 5 minus b = 5', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = calculate.minus(a, b);
    // assert
    expect(0).to.be.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = "a", b = "b"', () => {
    // arrange
    const a = 'a';
    const b = 'b';
    const total = calculate.minus(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Input a or b not found value." when a = "a", b = null', () => {
    // arrange
    const a = 'a';
    const total = calculate.minus(a);
    // act
    const message = 'Input a or b not found value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return total = 25 when a = 5 multiple b = 5', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = calculate.multiple(a, b);
    // assert
    expect(25).to.be.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = "a", b = "b"', () => {
    // arrange
    const a = 'a';
    const b = 'b';
    const total = calculate.multiple(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Input a or b not found value." when a = "a", b = null', () => {
    // arrange
    const a = 'a';
    const total = calculate.multiple(a);
    // act
    const message = 'Input a or b not found value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return total = 1 when a = 5 devide b = 5', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = calculate.devide(a, b);
    // assert
    expect(1).to.be.equal(total.total);
  });

  it('should return total = 0.5 when a = 4 devide b = 8', () => {
    // arrange
    const a = 4;
    const b = 8;
    // act
    const total = calculate.devide(a, b);
    // assert
    expect(0.5).to.be.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = 4, b = 0', () => {
    // arrange
    const a = 4;
    const b = 0;
    const total = calculate.devide(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Incorrect input a or b value." when a = "a", b = "b"', () => {
    // arrange
    const a = 'a';
    const b = 'b';
    const total = calculate.devide(a, b);
    // act
    const message = 'Incorrect input a or b value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });

  it('should return message = "Input a or b not found value." when a = "a", b = null', () => {
    // arrange
    const a = 'a';
    const total = calculate.devide(a);
    // act
    const message = 'Input a or b not found value.';
    // assert
    expect(message).to.be.not.equal(total.total);
  });
});
