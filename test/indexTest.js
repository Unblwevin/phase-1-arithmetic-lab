require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      var num1 = 31;
      var num2 = 2;
      expect(num1).to.be.a('number');
      expect(num2).to.be.a('number');
      expect(multiply()).to.equal(62);
    });
  });
});
describe('random', function() {
  it("generates a random integer greater than 0", function() {
    var randomNumber = random();
    expect(Number.isInteger(randomNumber)).to.be.true;
    expect(randomNumber).to.not.equal(0);
  });
});
describe('mod', function() {
  it("is an equation that calculates a remainder equal to 4", function() {
    var dividend = 19;
    var divisor = 5;
    var remainder = dividend % divisor;
    expect(remainder).to.equal(4);
  });
});
describe('max', function() {
  it("will return 20 as the highest number in the set", function() {
    var numbers = [10, 5, 20, 15];
    var max = Math.max(...numbers);
    expect(max).to.equal(20);
  });
});
