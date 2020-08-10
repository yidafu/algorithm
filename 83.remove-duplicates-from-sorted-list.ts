/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */
class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */



function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let nPtr = head;
  while(nPtr.next !== null) {
    if (nPtr.next.val === nPtr.val) {
      nPtr.next = nPtr.next.next;
    } else {
      nPtr = nPtr.next;
    }
  }
  return head;
};
// @lc code=end

