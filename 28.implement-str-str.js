/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.length - i < needle.length) {
        return -1;
      }

      let j = 1;
      for (; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        }
      }

      if (j === needle.length) {
        return i;
      }
    }
  }
  return -1;
};
// @lc code=end

strStr('a', 'a');
