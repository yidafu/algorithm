/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */
interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null): void;
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {

  if (root === null) {
    return true;
  }

  function theSame(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) {
      return true;
    } else if (left && right && left.val === right.val) {
      return theSame(left.left, right.right) && theSame(left.right, right.left);
    }
    return false;
  }

  return theSame(root.left, root.right);
};
// @lc code=end

