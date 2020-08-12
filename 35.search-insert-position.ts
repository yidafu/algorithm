/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  for(let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
};
// @lc code=end
