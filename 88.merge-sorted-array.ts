/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m-1, j = n-1, idx = m + n - 1;
  while(i >= 0 || j >= 0) {
    if (j < 0 ||nums1[i] >= nums2[j]) {
      nums1[idx--] = nums1[i--];
    } else if (i < 0 || nums1[i] < nums2[j]) {
      nums1[idx--] = nums2[j--];
    }
  }
};
// @lc code=end
