var assert = require('assert');

var Mecha = require('../src/mecha.js');

var mecha;

describe('Mecha', function() {
  beforeEach(function() {
    mecha = new Mecha(Math.random(), Math.random(), Math.random());
  });
  afterEach(function() {
    mecha = null;
  });

  it('should be an object.', function() {
    assert.equal(typeof mecha, 'object');
  });

  describe('Attributes', function() {
    it('should have a body.', function() {
      assert.ok(mecha.hasOwnProperty('body'));
      assert.equal(typeof mecha.body, 'number');
      assert.ok(mecha.body >= 0);
      assert.ok(mecha.body <= 1);
    });
    it('should have legs.', function() {
      assert.ok(mecha.hasOwnProperty('legs'));
      assert.equal(typeof mecha.legs, 'number');
      assert.ok(mecha.legs >= 0);
      assert.ok(mecha.legs <= 1);
    });
    it('should have arms.', function() {
      assert.ok(mecha.hasOwnProperty('arms'));
      assert.equal(typeof mecha.arms, 'number');
      assert.ok(mecha.arms >= 0);
      assert.ok(mecha.arms <= 1);
    });
  });

  describe('Stats', function() {
    it('should have attack.', function() {
      assert.ok(mecha.hasOwnProperty('attack'));
      assert.equal(typeof mecha.attack, 'number');
      assert.ok(mecha.attack >= 0);
      assert.ok(mecha.attack <= 1);
      assert.equal(typeof mecha.getCurrentAttack, 'function');
      assert.ok(mecha.getCurrentAttack() >= 0);
      assert.ok(mecha.getCurrentAttack() <= 1);
    });
    it('should have defend.', function() {
      assert.ok(mecha.hasOwnProperty('defend'));
      assert.equal(typeof mecha.defend, 'number');
      assert.ok(mecha.defend >= 0);
      assert.ok(mecha.defend <= 1);
      assert.equal(typeof mecha.getCurrentDefend, 'function');
      assert.ok(mecha.getCurrentDefend() >= 0);
      assert.ok(mecha.getCurrentDefend() <= 1);
    });
    it('should have move.', function() {
      assert.ok(mecha.hasOwnProperty('move'));
      assert.equal(typeof mecha.move, 'number');
      assert.ok(mecha.move >= 0);
      assert.ok(mecha.move <= 1);
      assert.equal(typeof mecha.getCurrentMove, 'function');
      assert.ok(mecha.getCurrentMove() >= 0);
      assert.ok(mecha.getCurrentMove() <= 1);
    });
  });

  describe('Damage', function() {
    beforeEach(function() {
      mecha = new Mecha(1, 1, 1);
    });
    it('should take damage.', function() {
      assert.ok(mecha.hasOwnProperty('damage'));
      assert.equal(typeof mecha.damage, 'function');
    });
  });
});
