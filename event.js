/**
 * @constructor
 */
var TypedEvent = module.exports = function () {};

/**
 * @param  {function(new:TypedEvent)=} baseCls
 * @return {function(new:TypedEvent,...):undefined}
 */
TypedEvent.extend = function (baseCls) {
  /**
   * @constructor
   * @param {...} args
   */
  function CustomTypedEvent() {}

  CustomTypedEvent.prototype = Object.create((baseCls || TypedEvent).prototype);
  CustomTypedEvent.prototype.constructor = CustomTypedEvent;

  return CustomTypedEvent;
};
