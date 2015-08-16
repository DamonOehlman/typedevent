/**
 * @constructor
 */
function TypedEmitter () {
}

/**
 * @param  {function(new:TypedError, ...)} cls
 * @param  {function(...):?} handler
 * @return {!TypedEmitter}
 */
TypedEmitter.prototype.on = function (cls, handler) {
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
TypedEmitter.prototype.emit = function (event) {
};