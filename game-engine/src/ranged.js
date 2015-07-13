var config = require('../etc/ranged.js');

var ranged = {};

ranged.ranges = function(range) {
  range = range / config.max_range * 100;
  if (range >= 100) {
    return 0;
  }
  if (range >= 75) {
    return 0.125;
  }
  if (range >= 50) {
    return 0.25;
  }
  if (range >= 25) {
    return 0.5;
  }
  if (range >= 10) {
    return 0.75;
  }
  return 1;
};

ranged.attack = function(attack, defend, range) {
  return attack / (defend + range);
};

module.exports = ranged;
