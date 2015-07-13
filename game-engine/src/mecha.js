var Mecha = function() {
  mecha = {};

  /* Attributes */
  mecha.body = 0;
  mecha.arms = 0;
  mecha.legs = 0;

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

  return mecha;
};


module.exports = Mecha;
