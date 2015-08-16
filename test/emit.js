var test = require('tape');
var AnimalEvents = require('./helpers/animal-events');
var Emitter = require('../emitter');

test('can register an event by type', function (t) {
  var emitter;
  t.plan(1);

  new Emitter().on(AnimalEvents.Cat, function() {});
  t.pass('registered CatEvent listener on emitter');
});

test('can respond to events by type', function (t) {
  var emitter;

  t.plan(1);
  emitter = new Emitter();
  emitter.on(AnimalEvents.Cat, function() {
    t.pass('got a cat event');
  });

  emitter.emit(new AnimalEvents.Cat());
});