var ranged = {};

ranged.attack = function(attack, defend, range) {
  return attack / (defend + range);
};

module.exports = ranged;
