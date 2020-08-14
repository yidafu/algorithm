/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {

  candidates.sort((a, b) => a -b);

  function combination(match: number[], index: number, target: number): void {

      for (let i = index; i < candidates.length; i++) {
        const sum = target - candidates[i];
        if (sum < 0) {
          break;
        } else if (sum === 0) {
          res.push([...match, candidates[i]]);
        } else {
          match.push(candidates[i]);
          combination(match, i, sum);
          match.pop();
        }
      }

  }

  const res: number[][] = [];
  combination([], 0, target);

  return res;
};
// @lc code=end

console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([1,2], 3))
console.log(combinationSum([2,3,6,7], 7))
