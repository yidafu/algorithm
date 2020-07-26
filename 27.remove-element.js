/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let lastIdx = nums.length;
  for (let i = 0; i < lastIdx; i++) {
    if (nums[i] === val) {
      lastIdx--;
      while (i < lastIdx && nums[lastIdx] === val) {
        lastIdx--;
      }
      nums[i] = nums[lastIdx];
    }
  }
  return lastIdx;
};
// @lc code=end
