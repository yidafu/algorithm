/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {

  function combination(match: number[], start: number, target: number, res: number[][]): void {
    if (candidates.indexOf(target) !== -1) {
      res.push([...match, target]);
    }
    for (let i = start; i <= (target / 2); i++) {
      const idx = candidates.indexOf(i);
      if (idx !== -1) {
        const leftNum = target - i;
        const leftIdx = candidates.indexOf(leftNum);
        if (leftIdx !== -1) {
          res.push([...match, i, leftNum]);
          const arr: number[][] = [];
          combination([], i, leftNum, arr);

          arr.forEach(a => {
            if (a.length > 1 && a[a.length - 1] >= i) {
              res.push([...match, i, ...a]);
            }
          });
        } else {
          combination([...match, i], i, leftNum, res);
        }
      }
    }
  }

  const res: number[][] = [];
  combination([], 1, target, res);

  return res;
};
// @lc code=end

console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([1,2], 3))
console.log(combinationSum([2,3,6,7], 7))
