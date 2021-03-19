// Leet code: https://leetcode.com/problems/merge-k-sorted-lists/submissions/
// Work in progress
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */

// O(nlogn) time | O(n) space
var mergeKLists = function(lists) {
    const vals = [];
    for (const list of lists) {
        let ptr = list;
        while(ptr !== null) {
            vals.push(ptr.val);
            ptr = ptr.next;
        }
    }
    vals.sort((a, b) => a - b);

    if (vals.length === 0) return null;
    const head = new ListNode(vals[0], null);
    let ptr = head;
    for (let i = 1; i < vals.length; i++) {
        ptr.next = new ListNode(vals[i], null);
        ptr = ptr.next;
    }
    return head;
};