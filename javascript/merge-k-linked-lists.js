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
var mergeKLists = function(lists) {
    if (lists.length === 0) return [];
    while(lists.length > 1) {
        const list1 = lists.pop();
        const list2 = lists.pop();
        const newMerged = merge(list1, list2);
        lists.unshift(newMerged);
    }
    return lists[0];    
};

function merge(node1, node2) {
    const head1 = node1;
    const head2 = node2;
    let headWinner = undefined;

    while (node1 !== null && node2 !== null) {
        if (node1.val < node2.val) {
            if (headWinner === undefined) headWinner = 'node1';
            if (node1.next === null || node1.next.val > node2.val) {
                const temp = node1.next;
                node1.next = node2;
                node1 = temp;
            } else {
                node1 = node1.next;   
            }
        } else {
            if (node2.next === null || node2.next.val > node1.val) {
                if (headWinner === undefined) headWinner = 'node2';
                const temp = node2.next;
                node2.next = node1;
                node2 = temp;
            } else {
                node2 = node2.next;   
            }
        }
    }
    return headWinner = 'node1' ? head1 : head2;
}