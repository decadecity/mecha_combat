var config = require('../etc/mecha.js');

var Mecha = function(body, arms, legs) {
  body = body || 0;
  arms = arms || 0;
  legs = legs || 0;

  mecha = {};

  /* Attributes */
  mecha.body = body;
  mecha.arms = arms;
  mecha.legs = legs;

  /* Stats */
  mecha.attack = 0;
  mecha.getCurrentAttack = function() {
    return mecha.attack * mecha.arms;
  };
  mecha.defend = 0;
  mecha.getCurrentDefend = function() {
    return mecha.defend * mecha.body;
  };
  mecha.move = 0;
  mecha.getCurrentMove = function() {
    return mecha.move * mecha.legs;
  };

  mecha.current_order = 'move';
  mecha.next_order = null;

  /* Interactions */

  mecha.damage = function(amount) {
    amount = amount || config.damage_amount;
    var location;
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        location = 'body';
        break;
      case 1:
        location = 'arms';
        break;
      case 2:
        location = 'legs';
        break;
    }
    mecha[location] -= amount;
  };

  function repairLocation(location, amount) {
    mecha[location] = Math.min(1, mecha[location] + amount);
  }

  mecha.repair = function(location) {
    var repair_amount = config.repair_amount;
    if (location) {
      repairLocation(location, repair_amount);
    } else {
      repair_amount = repair_amount / 3;
      repairLocation('body', repair_amount);
      repairLocation('arms', repair_amount);
      repairLocation('legs', repair_amount);
    }
  };

  return mecha;
};


module.exports = Mecha;
