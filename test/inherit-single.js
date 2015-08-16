var test = require('tape');
var TypedEvent = require('../event');
var TestTypedEvent;

test('can define a new type of event', function (t) {
  t.plan(1);
  TestTypedEvent = TypedEvent.extend();
  t.ok(TestTypedEvent instanceof TypedEvent, 'extended successfully');
});