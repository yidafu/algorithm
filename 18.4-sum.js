/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start

/**
   * kSum recursive solution
   *
   * @param {number[]} nums
   * @param {number} start
   * @param {number} k
   * @param {number} target
   * @returns {number[][]}
   */
function kSum(nums, start, k, target) {
  const res = [];
  if (k === 2) {
    let low = start;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[low] + nums[high];
      if (sum === target) {
        res.push([nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      const tmp = kSum(nums, i + 1, k - 1, target - nums[i]);
      tmp.forEach((arr) => {
        res.push([nums[i], ...arr]);
      });
    }
  }
  return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, 0, 4, target);
};
// @lc code=end
