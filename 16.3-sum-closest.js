/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  if (nums && nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  let closestSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= nums.length - 3; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum === target) {
        return sum;
      } if (sum < target) {
        low++;
      } else {
        high--;
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
    }
  }

  return closestSum;
};
// @lc code=end

threeSumClosest([-1, 2, 1, -4], 1);
