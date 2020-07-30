/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
  function recursiveCountAndSay(n: number): string {
    switch (n) {
      case 1: return '1';
      case 2: return '11';
      case 3: return '21';
      default: {
        const str = recursiveCountAndSay(n - 1);
        let res = '';
        let lastChar = str[0];
        let count = 0;
        for(let idx = 0; idx < str.length; idx++) {
          if (str[idx] === lastChar) {
            count++;
          } else {
            res += count + '' + lastChar;
            lastChar = str[idx];
            count = 1;
          }
        }
        res += count + '' + lastChar;
        return res;
      }
    }
  }

  return recursiveCountAndSay(n);
};
// @lc code=end
