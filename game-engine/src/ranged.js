var config = require('../etc/ranged.js');

var ranged = {};

/**
 * Calculates the base chance of a hit at a given range increment.
 *
 * This will return -ve chances to hit a long ranges as they can be modified
 * by bonuses.
 *
 * @param range {float} Range to target.
 *
 * @returns {float} Base chance of hitting.
 */
function rangeIncrements(range) {
  // Range expressed as % of max range.
  range = range / config.max_range * 100;

  if (range >= 150) {
    return -1;
  }
  if (range >= 125) {
    return -0.25;
  }
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
}

ranged.attack = function(attack, defend, range) {
  var modifier = (attack - defend) * config.a_d_ratio;
  return rangeIncrements(range) + modifier;
};

module.exports = ranged;
