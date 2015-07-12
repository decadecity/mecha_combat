var assert = require('assert');

var ranged = require('../src/ranged.js');

describe('Ranged combat', function() {
  describe('Attack', function() {
    it('should be able to attack', function() {
      assert.ok(ranged.hasOwnProperty('attack'));
      assert.equal(typeof ranged.attack, 'function');
    });
  });
});
