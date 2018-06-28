const expect = require('chai').expect;
const add = require('../src/add');

describe('Test class Calculate', () => {
  beforeEach(() => {
    add;
  })
  it('when a = 5, b = 5, equal 10', () => {
    // arrange
    const a = 5;
    const b = 5;
    // act
    const total = add(a, b);
    // assert
    expect(10).to.be.equal(total);
  });
  it('when a = -5, b = 5, equal 0', () => {
    // arrange
    const a = -5;
    const b = 5;
    // act
    const total = add(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('when a = 5, b = -5, equal 0', () => {
    // arrange
    const a = 5;
    const b = -5;
    // act
    const total = add(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('when a = 0, b = 0, equal 0', () => {
    // arrange
    const a = 0;
    const b = 0;
    // act
    const total = add(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
  it('when a = "5", b = "5", equal 10', () => {
    // arrange
    const a = "5";
    const b = "5";
    // act
    const total = add(a, b);
    // assert
    expect(10).to.be.equal(total);
  });
  it('when a = "5", b = "a", equal 5', () => {
    // arrange
    const a = "5";
    const b = "a";
    // act
    const total = add(a, b);
    // assert
    expect(5).to.be.equal(total);
  });
  it('when a = "a", b = "b", equal 0', () => {
    // arrange
    const a = "a";
    const b = "b";
    // act
    const total = add(a, b);
    // assert
    expect(0).to.be.equal(total);
  });
});
