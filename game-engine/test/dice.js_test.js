var assert = require('assert');
var sinon = require('sinon');
var rewire = require('rewire');

var dice = rewire('../src/dice.js');

dice.__set__('config', {
  number: 1,
  sides: 1,
});

describe('Dice', function() {
  var sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });
  afterEach(function () {
    sandbox.restore();
  });
  describe('Roll', function() {
    it('should be able to roll.', function() {
      assert.ok(dice.hasOwnProperty('roll'));
      assert.equal(typeof dice.roll, 'function');
      sandbox.stub(Math, 'random').returns(1);
      assert.equal(dice.roll(1, 1), 1);
    });
  });
});
