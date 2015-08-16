/**
 * @constructor
 * @param {Object=} options
 */
var TypedEvent = module.exports = function (options) {};

/**
 * @param  {function(new:TypedEvent)=} baseCls
 * @return {function(new:TypedEvent,...):undefined}
 */
TypedEvent.extend = function (baseCls) {
  /**
   * @constructor
   * @param {Object=} options
   */
  function CustomTypedEvent(options) {
    TypedEvent.call(this, options);
  }

  CustomTypedEvent.prototype = Object.create((baseCls || TypedEvent).prototype);
  CustomTypedEvent.prototype.constructor = CustomTypedEvent;

  return CustomTypedEvent;
};
