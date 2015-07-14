var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');

var dice = rewire('../src/dice.js');

dice.__set__('config', {
  number: 1,
  sides: 1,
});

describe('Dice', function() {
  describe('Roll', function() {
    it('should be able to roll.', sinon.test(function() {
      assert.ok(dice.hasOwnProperty('roll'));
      assert.equal(typeof dice.roll, 'function');
      this.stub(Math, 'random').returns(1);
      assert.equal(dice.roll(1, 1), 1);
    }));
  });
});
