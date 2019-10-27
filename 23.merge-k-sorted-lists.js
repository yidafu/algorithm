/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const resList = {
    next: null,
    val: null,
  };

  function findMinFormLists(lists) {
    let minIdx = -1;
    const minNode = {
      val: Number.MAX_SAFE_INTEGER,
    };
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] !== null) {
        if (lists[i].val < minNode.val) {
          minNode.val = lists[i].val;
          minIdx = i;
        }
      }
    }

    if (minIdx > -1) {
      lists[minIdx] = lists[minIdx].next;
      return minNode;
    }
    return null;
  }
  let ptr = resList;
  let node = {};
  // eslint-disable-next-line no-cond-assign
  while (node !== null) {
    node = findMinFormLists(lists);
    ptr.next = node;
    ptr = ptr.next;
  }
  return resList.next;
};
// @lc code=end
