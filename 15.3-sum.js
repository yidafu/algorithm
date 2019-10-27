/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums && nums.length < 3) {
    return [];
  }

  nums.sort((a,b) => a-b);
  const res = [];
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        const unit = [nums[i], nums[low], nums[high]];
        res.push(unit);

        while (nums[low] === nums[low + 1]) low ++;
        while (nums[high] === nums[high - 1]) high --;

        low ++;
        high --;
      } else if (sum < 0) {
        low ++;
      } else {
        high --; 
      }
    }
  }

  return res;
};
// @lc code=end

