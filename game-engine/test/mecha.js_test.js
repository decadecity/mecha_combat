var assert = require('assert');
var rewire = require('rewire');
var sinon = require('sinon');

var Mecha = rewire('../src/mecha.js');

Mecha.__set__('config', {
  damage_amount: 0.25,
  repair_amount: 0.6,
});

var mecha;

describe('Mecha', function() {
  beforeEach(function() {
    mecha = new Mecha(Math.random(), Math.random(), Math.random());
  });
  afterEach(function() {
    mecha = null;
  });

  it('should be an object.', function() {
    mecha = new Mecha();
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
      assert.ok(mecha.getCurrentAttack() >= 0);
      assert.ok(mecha.getCurrentAttack() <= 1);
    });
    it('should have defend.', function() {
      assert.ok(mecha.hasOwnProperty('defend'));
      assert.equal(typeof mecha.defend, 'number');
      assert.ok(mecha.defend >= 0);
      assert.ok(mecha.defend <= 1);
      assert.ok(mecha.getCurrentDefend() >= 0);
      assert.ok(mecha.getCurrentDefend() <= 1);
    });
    it('should have move.', function() {
      assert.ok(mecha.hasOwnProperty('move'));
      assert.equal(typeof mecha.move, 'number');
      assert.ok(mecha.move >= 0);
      assert.ok(mecha.move <= 1);
      assert.ok(mecha.getCurrentMove() >= 0);
      assert.ok(mecha.getCurrentMove() <= 1);
    });
  });

  describe('Damage', function() {
    beforeEach(function() {
      mecha = new Mecha(1, 1, 1);
    });

    it('should damage the body', sinon.test(function() {
      this.stub(Math, 'random').returns(0);
      mecha.damage();
      assert.equal(mecha.body, 0.75);
    }));
    it('should damage the arms', sinon.test(function() {
      this.stub(Math, 'random').returns(0.5);
      mecha.damage();
      assert.equal(mecha.arms, 0.75);
    }));
    it('should damage the legs', sinon.test(function() {
      this.stub(Math, 'random').returns(1);
      mecha.damage();
      assert.equal(mecha.legs, 0.75);
    }));
  });

  describe('Repair', function() {
    it('should repair all attributes.', function() {
      mecha = new Mecha(0.1, 0.1, 0.1);
      mecha.repair();
      assert.equal(mecha.body, 0.3);
      assert.equal(mecha.arms, 0.3);
      assert.equal(mecha.legs, 0.3);
    });
    it('should repair individual attributes.', function() {
      mecha = new Mecha(0.1, 0.1, 0.1);
      mecha.repair('body');
      assert.equal(mecha.body, 0.7);
      assert.equal(mecha.arms, 0.1);
      assert.equal(mecha.legs, 0.1);

      mecha = new Mecha(0.1, 0.1, 0.1);
      mecha.repair('arms');
      assert.equal(mecha.body, 0.1);
      assert.equal(mecha.arms, 0.7);
      assert.equal(mecha.legs, 0.1);

      mecha = new Mecha(0.1, 0.1, 0.1);
      mecha.repair('legs');
      assert.equal(mecha.body, 0.1);
      assert.equal(mecha.arms, 0.1);
      assert.equal(mecha.legs, 0.7);
    });
    it('should not repair above 1.', function() {
      mecha = new Mecha(0.9, 1, 1);
      mecha.repair('body');
      assert.equal(mecha.body, 1);
    });
  });
});
