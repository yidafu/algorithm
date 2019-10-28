/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 *
 *
 * @param {*} val
 * @returns {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function swapPairs(head) {
  if (head === null) return null;

  // only one node
  if (head.next === null) return head;

  let ptr = { next: head };

  // eslint-disable-next-line no-param-reassign
  const newHead = head.next;

  while (ptr.next !== null) {
    const first = ptr.next;
    const second = first.next;
    if (second === null) break;
    const third = second.next;

    ptr.next = second;
    first.next = third;
    second.next = first;

    ptr = first;
  }

  return newHead;
};
// @lc code=end
