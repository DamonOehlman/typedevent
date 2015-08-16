var test = require('tape');
var TypedEvent = require('../event');
var AnimalEvent;
var CatEvent;
var VehicleEvent;

test('can extend TypedEvent -> VehicleEvent', function (t) {
  t.plan(1);
  VehicleEvent = TypedEvent.extend();
  t.ok(typeof VehicleEvent == 'function', 'extended successfully');
});

test('can extend TypedEvent -> AnimalEvent', function (t) {
  t.plan(1);
  AnimalEvent = TypedEvent.extend();
  t.ok(typeof AnimalEvent == 'function', 'extended successfully');
});

test('can create an instance of the AnimalEvent', function (t) {
  var evt;

  t.plan(3);
  t.ok(evt = new AnimalEvent(), 'created AnimalEvent');
  t.ok(evt instanceof AnimalEvent, 'is a AnimalEvent');
  t.ok(evt instanceof TypedEvent, 'is a TypedEvent');
});

test('extend AnimalEvent -> CatEvent', function (t) {
  t.plan(1);
  CatEvent = TypedEvent.extend(AnimalEvent);
  t.ok(typeof CatEvent == 'function', 'extended');
});

test('an instance of CatEvent is a CatEvent, AnimalEvent + TypedEvent', function (t) {
  var evt;

  t.plan(5);
  t.ok(evt = new CatEvent(), 'created CatEvent');
  t.ok(evt instanceof CatEvent, 'is a CatEvent');
  t.ok(evt instanceof AnimalEvent, 'is an AnimalEvent');
  t.ok(evt instanceof TypedEvent, 'is a TypedEvent');
  t.notOk(evt instanceof VehicleEvent, 'is not a VehicleEvent');
});