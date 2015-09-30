var config = require('../etc/mecha.js');

function Mecha(body, arms, legs, storage) {
  body = body || 0;
  arms = arms || 0;
  legs = legs || 0;

  function save() {
    if (storage && typeof storage.setItem === 'function') {
      storage.setItem('mecha', {
        'body': mecha.body,
        'body_working': mecha.body_working,
        'arms': mecha.arms,
        'arms_working': mecha.arms_working,
        'legs': mecha.legs,
        'legs_working': mecha.legs_working,
        'current_order': mecha.current_order,
        'next_order': mecha.next_order
      });
    }
  }

  var mecha = {};

  /* Attributes */
  mecha.body = body;
  mecha.body_working = body;
  mecha.arms = arms;
  mecha.arms_working = arms;
  mecha.legs = legs;
  mecha.legs_working = legs;

  // Orders
  mecha.current_order = 'move';
  mecha.next_order = null;

  save();


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
    mecha[location + '_working'] -= amount;
    //save
  };

  function repairLocation(location, amount) {
    mecha[location] = Math.min(1, mecha[location] + amount);
    mecha[location + '_working'] = mecha[location];
    //save
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

  mecha.turnOver = function() {
    mecha.current_order = mecha.next_order;
    mecha.next_order = null;
    mecha.body = mecha.body_working;
    mecha.arms = mecha.arms_working;
    mecha.legs = mecha.legs_working;
    //save
  };

  return mecha;
}


module.exports = Mecha;
