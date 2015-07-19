var assert = require('assert');
var rewire = require('rewire');
var sinon = require('sinon');

var Turn = rewire('../src/turn-sequence.js');

var actions = [
  'order',
  'repair',
  'move',
  'shoot',
]

Turn.__set__('config', {
  'actions': actions,
});

var turn;

describe('Turn sequence', function() {
  beforeEach(function() {
    turn = new Turn();
  });

  it('should be an object.', function() {
    assert.equal(typeof turn, 'object');
  });
  it('should expose the current action.', function() {
    assert.equal(turn.getCurrent(), actions[0]);
  });
  it('should advance the action.', function() {
    assert.equal(turn.next(), actions[1]);
    assert.equal(turn.getCurrent(), actions[1]);
  });
  it('should end the turn.', function() {
    actions.forEach(turn.next);
    assert.equal(turn.getCurrent(), 'end');
  });
  it('should start a new turn.', function() {
    actions.forEach(turn.next);
    assert.equal(turn.next(), actions[0]);
  });
});
