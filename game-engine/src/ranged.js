var config = require('../etc/ranged.js');

var ranged = {};

ranged.attack = function(attack, defend, range) {
  return attack / (defend + range);
};

module.exports = ranged;
