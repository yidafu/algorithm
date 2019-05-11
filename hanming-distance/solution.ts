/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let value = (x ^ y);
  let distance = 0;
  while( value > 0) {
    (value & 1) && (distance += 1);
    value = value >> 1;
  }
  return distance;
};

console.log( hammingDistance(1, 4) )
