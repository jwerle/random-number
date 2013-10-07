
var w = Date.now() & 0x40;
var z = Date.now();

/**
 * Export `random`
 */

module.exports = random;


/**
 * Returns a random 32 bit number
 *
 * @api public
 */

function random () {
  z = 0x9069 * (z & 0xffff) + (z >> 0x10);
  w = 0x4650 * (w & 0xffff) + (w >> 0x10);
  var v = ((z << 0x10) + w);
  var b = v >> 0x1f;
  // abs
  return (v ^ b) - b;
}
