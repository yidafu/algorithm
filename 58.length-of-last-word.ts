/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
const SPACE = ' ';
function lengthOfLastWord(s: string): number {
  let len = 0;
  let idx = s.length - 1;
  for (idx; idx >= 0; idx --) {
    if (s[idx] !== SPACE) {
      break;
    }
  }
  for (; idx >= 0; idx --) {
    if (s[idx] !== SPACE) {
      len ++;
    } else {
      break
    }
  }
  return len;
};
// @lc code=end

console.log(lengthOfLastWord('a '));
