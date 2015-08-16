var test = require('tape');
var TypedEvent = require('../event');
var TestTypedEvent;

test('can define a new type of event', function (t) {
  t.plan(1);
  TestTypedEvent = TypedEvent.extend();
  t.ok(typeof TestTypedEvent == 'function', 'extended successfully');
});

test('can create an instance of the test typed event', function (t) {
  var evt;

  t.plan(2);
  t.ok(evt = new TestTypedEvent());
  t.ok(evt instanceof TestTypedEvent, 'is a TestTypedEvent');
  t.ok(evt instanceof TypedEvent, 'is a TypedEvent');
});