/**
 * @constructor
 */
var TypedEmitter = module.exports = function () {
  /**
   * @private
   * @type {!WeakMap}
   */
  this.events = new WeakMap();

  /**
   * @private
   * @type {!Array.<!function(new:TypedError,...)}
   */
  this.knownClasses = [];
}

/**
 * @param  {function(new:TypedError, ...)} cls
 * @param  {function(...):?} handler
 * @return {!TypedEmitter}
 */
TypedEmitter.prototype.on = function (cls, handler) {
  this.events.set(cls, (this.events.get(cls) || []).concat(handler || []));
  this.knownClasses.push(cls);
  return this;
};

/**
 * @param  {function(new:TypedError, ...)} cls
 * @param  {function(...):?} handler
 * @return {!TypedEmitter}
 */
TypedEmitter.prototype.removeListener = function (cls, handler) {
};

/**
 * @param  {!TypedEvent} event
 * @return {!Array.<?>}
 */
TypedEmitter.prototype.emit = function (evt) {
  var matchingClasses = this.knownClasses.filter(function(cls) {
    return evt instanceof cls;
  });
  var results = [];

  matchingClasses.forEach(function(cls) {
    results = results.concat((this.events.get(cls) || []).map(function(handler) {
      return handler(evt);
    }));
  }, this);

  return results;
};