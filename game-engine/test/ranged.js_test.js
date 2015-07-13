var assert = require('assert');
var rewire = require('rewire');

var ranged = rewire('../src/ranged.js');

ranged.__set__('config', {
  max_range: 100,
  a_d_ratio: 0.25,
});

var rangeIncrements = ranged.__get__('rangeIncrements');

var test_ranges = [
  { range: 1, hit: 1 },
  { range: 10, hit: 0.75 },
  { range: 25, hit: 0.5 },
  { range: 50, hit: 0.25 },
  { range: 75, hit: 0.125 },
  { range: 100, hit: 0 },
  { range: 125, hit: -0.25 },
  { range: 150, hit: -1 },
];

describe('Ranged combat', function() {

  describe('Ranges', function() {
    it('should work out the range increments.', function() {
      test_ranges.forEach(function(data) {
        assert.equal(rangeIncrements(data.range), data.hit, 'Range increment ' + data.range);
      });
    });
  });

  describe('Attack', function() {
    it('should be able to attack', function() {
      assert.ok(ranged.hasOwnProperty('attack'));
      assert.equal(typeof ranged.attack, 'function');
      assert.equal(ranged.attack(1, 1, 1), 1);
      assert.equal(ranged.attack(1, 0, 1), 1.25);
      assert.equal(ranged.attack(0, 1, 1), 0.75);
    });
  });
});
