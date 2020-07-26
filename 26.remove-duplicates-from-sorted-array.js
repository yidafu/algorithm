/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let len = 0;
  let duplicate = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) {
        duplicate = true;
        break;
      }
      duplicate = false;
    }

    if (!duplicate) {
      // swap
      const tmp = nums[len];
      nums[len] = nums[i];
      nums[i] = tmp;
      len++;
    }
  }
  return len;
};
// @lc code=end
