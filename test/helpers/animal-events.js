var TestEvent = require('../../event');
var AnimalEvent = exports.Animal = TestEvent.extend();
var CatEvent = exports.Cat = TestEvent.extend(AnimalEvent);