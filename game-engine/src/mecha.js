var Mecha = function() {
  mecha = {};

  /* Attributes */
  mecha.body = 0;
  mecha.arms = 0;
  mecha.legs = 0;

  /* Stats */
  mecha.attack = 0;
  mecha.getCurrentAttack = function() {
    return mecha.attack * mecha.arms / 100;
  };
  mecha.defend = 0;
  mecha.getCurrentDefend = function() {
    return mecha.defend * mecha.body / 100;
  };
  mecha.move = 0;
  mecha.getCurrentMove = function() {
    return mecha.move * mecha.legs / 100;
  };

  return mecha;
};


module.exports = Mecha;
