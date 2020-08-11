/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let curr = nums[0], max = nums[0];
  for(let i = 1; i < nums.length; i ++) {
    curr = Math.max(nums[i], nums[i] + curr);
    if (max < curr) {
      max = curr;
    }
  }

  return max;
};
// @lc code=end

