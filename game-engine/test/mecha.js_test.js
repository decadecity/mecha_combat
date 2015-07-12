var assert = require('assert');

var Mecha = require('../src/mecha.js');

var mecha = new Mecha();

describe('Mecha', function() {
  it('should be an object.', function() {
    assert.equal(typeof mecha, 'object');
  });
  describe('Attributes', function() {
    it('should have a body.', function() {
      assert.ok(mecha.hasOwnProperty('body'));
      assert.equal(typeof mecha.body, 'number');
      assert.ok(mecha.body >= 0);
      assert.ok(mecha.body <= 100);
    });
    it('should have legs.', function() {
      assert.ok(mecha.hasOwnProperty('legs'));
      assert.equal(typeof mecha.legs, 'number');
      assert.ok(mecha.legs >= 0);
      assert.ok(mecha.legs <= 100);
    });
    it('should have arms.', function() {
      assert.ok(mecha.hasOwnProperty('arms'));
      assert.equal(typeof mecha.arms, 'number');
      assert.ok(mecha.arms >= 0);
      assert.ok(mecha.arms <= 100);
    });
  });
  describe('Stats', function() {
    it('should have attack.', function() {
      assert.ok(mecha.hasOwnProperty('attack'));
      assert.equal(typeof mecha.attack, 'number');
      assert.ok(mecha.attack >= 0);
      assert.ok(mecha.attack <= 100);
      assert.equal(typeof mecha.getCurrentAttack, 'function');
      assert.ok(mecha.getCurrentAttack() >= 0);
      assert.ok(mecha.getCurrentAttack() <= 100);
    });
    it('should have defend.', function() {
      assert.ok(mecha.hasOwnProperty('defend'));
      assert.equal(typeof mecha.defend, 'number');
      assert.ok(mecha.defend >= 0);
      assert.ok(mecha.defend <= 100);
      assert.equal(typeof mecha.getCurrentDefend, 'function');
      assert.ok(mecha.getCurrentDefend() >= 0);
      assert.ok(mecha.getCurrentDefend() <= 100);
    });
    it('should have move.', function() {
      assert.ok(mecha.hasOwnProperty('move'));
      assert.equal(typeof mecha.move, 'number');
      assert.ok(mecha.move >= 0);
      assert.ok(mecha.move <= 100);
      assert.equal(typeof mecha.getCurrentMove, 'function');
      assert.ok(mecha.getCurrentMove() >= 0);
      assert.ok(mecha.getCurrentMove() <= 100);
    });
  });
});
