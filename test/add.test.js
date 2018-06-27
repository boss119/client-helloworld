const expect = require('chai').expect;
const add = require('../src/add');

describe('Test class Calculate', () => {
  let calculate;
  beforeEach(() => {
    calculate = add;
  })
  it('should be success when a = 5, b = 5, expected 10', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = calculate(a, b);
    // assert
    expect(10).to.be.equal(total);
  });
  it('should be success when a = -5, b = 5, expected 0', () => {
    // arrange
    const a = -5;
    const b = 5;
    // act
    const total = calculate(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('should be success when a = 5, b = -5, expected 0', () => {
    // arrange
    const a = 5;
    const b = -5;
    // act
    const total = calculate(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('should be success when a = 0, b = 0, expected 0', () => {
    // arrange
    const a = 0;
    const b = 0;
    // act
    const total = calculate(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('should be success when a = "5", b = "5", expected 10', () => {
    // arrange
    const a = "5";
    const b = "5";
    // act
    const total = calculate(a, b);
    // assert
    expect(10).to.be.equal(total);
  });
});
