// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space - where n is the length of the linked list
function removeKthNodeFromEnd(head, k) {
    const length = getLinkedListLength(head);
    let removeIdx = length - k;

    if (removeIdx === 0) {
        head.value = head.next.value;
    }

    let prev = head;

    for (let i = 1; i < removeIdx; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;
}

function getLinkedListLength(head) {
    let ptr = head;
    let count = 0;

    while (ptr !== null) {
        count++;
        ptr = ptr.next;
    }

    return count;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;