/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @see https://segmentfault.com/a/1190000004261879
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1;
  let division = 0;
  const sign = (dividend ^ divisor) >= 0 ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);


  let n;
  while (dividend >= divisor) {
    n = 1;
    let tmpDivisor = divisor;
    while (dividend >= tmpDivisor) {
      dividend -= tmpDivisor;
      division += n;

      if (tmpDivisor <= (INT_MAX >> 1)) {
        tmpDivisor <<= 1;
        n <<= 1;
      }
    }
  }

  division *= sign;
  return division > INT_MAX ? INT_MAX : division;
};
// @lc code=end
