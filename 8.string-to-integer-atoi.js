/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const WITHESPACE = ' ';
  const PLUS = '+';
  const MINUS = '-';
  const signMap = {
    [PLUS]: 1,
    [MINUS]: -1,
  };

  let sign = signMap[PLUS]; // 1 or -1

  let idx = 0;
  // skip whitespace
  while (idx < str.length && str[idx] === WITHESPACE) {
    idx++;
  }

  // all chars is wihtespace
  if (idx === str.length) {
    return 0;
  }

  // eat sign operator
  if (str[idx] === PLUS || str[idx] === MINUS) {
    sign = signMap[str[idx]];
    idx++;
  }

  let endIdx = idx;
  // custom numberical digits
  for (;endIdx < str.length; endIdx++) {
    const charCode = str.charCodeAt(endIdx);
    if (charCode < 48 || charCode > 57) {
      break;
    }
  }
  // // no numberical digits
  // if (endIdx === idx) {
  //   return 0;
  // }

  /**
   *
   *
   * @param {String} char
   * @returns {Number}
   */
  function charToNum(char) {
    return char.charCodeAt() - 48;
  }

  let res = 0;
  let decimal = 1;
  endIdx--;
  for (;idx <= endIdx; endIdx--) {
    res += (charToNum(str[endIdx]) * decimal);
    decimal *= 10;
  }
  res *= sign;

  // INT_MAX (231 − 1) or INT_MIN (−231)
  const INT_MAX = 2147483647; // 2 ** 31 - 1
  const INT_MIN = -2147483648; // -(2 ** 31)
  if (res > INT_MAX) {
    return INT_MAX;
  }

  if (res < INT_MIN) {
    return INT_MIN;
  }

  return res;
};
// @lc code=end
