var config = require('../etc/dice.js');

function die() {
  return Math.floor(Math.random() * (config.sides - 1)) + 1;
}

var dice = {};

dice.roll = function() {
  var result = 0;
  for (var i = config.number - 1; i >= 0; i--) {
    result = result + die();
  }
  return result;
};

module.exports = dice;
