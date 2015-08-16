var test = require('tape');
var TypedEvent = require('../event');
var AnimalTypedEvent;
var CatTypedEvent;
var VehicleTypedEvent;

test('can extend TypedEvent -> VehicleTypedEvent', function (t) {
  t.plan(1);
  VehicleTypedEvent = TypedEvent.extend();
  t.ok(typeof VehicleTypedEvent == 'function', 'extended successfully');
});

test('can extend TypedEvent -> AnimalTypedEvent', function (t) {
  t.plan(1);
  AnimalTypedEvent = TypedEvent.extend();
  t.ok(typeof AnimalTypedEvent == 'function', 'extended successfully');
});

test('can create an instance of the AnimalTypedEvent', function (t) {
  var evt;

  t.plan(3);
  t.ok(evt = new AnimalTypedEvent(), 'created AnimalTypedEvent');
  t.ok(evt instanceof AnimalTypedEvent, 'is a AnimalTypedEvent');
  t.ok(evt instanceof TypedEvent, 'is a TypedEvent');
});

test('extend AnimalTypedEvent -> CatTypedEvent', function (t) {
  t.plan(1);
  CatTypedEvent = TypedEvent.extend(AnimalTypedEvent);
  t.ok(typeof CatTypedEvent == 'function', 'extended');
});

test('an instance of CatTypedEvent is a CatTypedEvent, AnimalTypedEvent + TypedEvent', function (t) {
  var evt;

  t.plan(5);
  t.ok(evt = new CatTypedEvent(), 'created CatTypedEvent');
  t.ok(evt instanceof CatTypedEvent, 'is a CatTypedEvent');
  t.ok(evt instanceof AnimalTypedEvent, 'is an AnimalTypedEvent');
  t.ok(evt instanceof TypedEvent, 'is a TypedEvent');
  t.notOk(evt instanceof VehicleTypedEvent, 'is not a VehicleTypedEvent');
});