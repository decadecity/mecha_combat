var config = require('../etc/turn-sequence.js');

function Turn() {
  var turn = {};

  var action = 0;

  turn.getCurrent = function() {
    if (action < config.actions.length) {
      return config.actions[action];
    } else {
      return 'end';
    }
  };

  turn.next = function() {
    action += 1;
    if (action > config.actions.length) {
      action = 0;
    }
    return turn.getCurrent();
  };

  return turn;
};

module.exports = Turn;
