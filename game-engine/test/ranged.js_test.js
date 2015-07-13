var assert = require('assert');
var rewire = require('rewire');

var ranged = rewire('../src/ranged.js');

ranged.__set__('config', {
  max_range: 100,
});

var test_ranges = [
  { range: 1, hit: 1 },
  { range: 10, hit:  0.75 },
  { range: 25, hit:  0.5 },
  { range: 50, hit:  0.25 },
  { range: 75, hit:  0.125 },
  { range: 100, hit: 0 },
];

describe('Ranged combat', function() {

  describe('Ranges', function() {
    it('should work out the range increments.', function() {
      assert.ok(ranged.hasOwnProperty('attack'));
      assert.equal(typeof ranged.attack, 'function');
      test_ranges.forEach(function(data) {
        assert.equal(ranged.ranges(data.range), data.hit, 'Range increment ' + data.range);
      });
    });
  });

  describe('Attack', function() {
    it('should be able to attack', function() {
      assert.ok(ranged.hasOwnProperty('attack'));
      assert.equal(typeof ranged.attack, 'function');
    });
  });
});
