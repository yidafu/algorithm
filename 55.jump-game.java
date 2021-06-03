/*
 * @lc app=leetcode id=55 lang=java
 *
 * [55] Jump Game
 */

// @lc code=start
class JumpGame1 {
    public boolean canJump(int[] nums) {
      if (nums.length == 0) return true;
        // 目标让 idx 走到 nums.length - 1
        // 剩余要走的长度
      int idx = 0;

      while (idx < nums.length - 1) {
        if (nums[idx] == 0) {
          return false;
        }

        int maxStep = -1;
        int nextIdx = idx;
        int nextMaxStep = idx + nums[idx];
        for (int j = idx + 1; j < nums.length && j <= nextMaxStep; j++) {
          if (maxStep <= nums[j] + j) {
            maxStep = j + nums[j];
            nextIdx = j;
          }
        }

        idx = nextIdx;
      }

      return true;
    }
}
// @lc code=end

