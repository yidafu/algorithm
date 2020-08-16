/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  function combination(match: number[], index: number, target: number): void {

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i-1] === candidates[i]) {
        continue;
      }
      const sum = target - candidates[i];
      if (sum < 0) {
        break;
      } else if (sum === 0) {
        res.push([...match, candidates[i]]);
      } else {
        match.push(candidates[i]);
        combination(match, i + 1, sum);
        match.pop();
      }
    }

  }

  const res: number[][] = [];
  combination([], 0, target);

  return res;

};
// @lc code=end

console.log(combinationSum2([2,5,2,1,2],5));
console.log(combinationSum2([1,  2, 5, 6, 7, 10], 8));

