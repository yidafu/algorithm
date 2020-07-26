/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @typedef {object} ListNode
 * @property {number} val
 * @property {ListNode} next
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let newList = null;
  let oldListPtr = head;
  let firstLoop = true;
  let lastNoede = { next: null };
  while (oldListPtr !== null) {
    const firstKGruopNode = oldListPtr;
    let preNode = null;
    let newListPtr = null;
    // check if last node greater then k
    let j = 0;
    let checkPtr = oldListPtr;
    while (checkPtr !== null) {
      checkPtr = checkPtr.next;
      j++;
    }
    if (j < k) {
      lastNoede.next = oldListPtr;
      if (firstLoop) newList = head;
      break;
    }
    let i = k;
    while (i > 0 && oldListPtr !== null) {
      i--;
      newListPtr = oldListPtr;
      oldListPtr = oldListPtr.next;
      newListPtr.next = preNode;
      preNode = newListPtr;
    }
    if (firstLoop) {
      newList = newListPtr;
      firstLoop = false;
    }

    lastNoede.next = newListPtr;

    lastNoede = firstKGruopNode;
  }

  return newList;
};
// @lc code=end
