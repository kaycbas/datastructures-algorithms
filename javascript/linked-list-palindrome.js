// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space
function linkedListPalindrome(head) {
    let length = getLength(head);

    let midPoint = head;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        midPoint = midPoint.next;
    }

    let reversePtr = reverseLinkedList(midPoint);
    let forwardPtr = head;

    while (reversePtr !== null) {
        if (forwardPtr.value !== reversePtr.value) return false;
        forwardPtr = forwardPtr.next;
        reversePtr = reversePtr.next;
    }

    return true;
}

function getLength(head) {
    if (!head) return 0;

    let length = 1;
    let currNode = head.next;

    while (currNode !== null) {
        length++;
        currNode = currNode.next;
    }

    return length;
}

function reverseLinkedList(head) {
    let prevNode = null;
    let currNode = head;

    while (currNode !== null) {
        const nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }

    return prevNode;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.linkedListPalindrome = linkedListPalindrome;