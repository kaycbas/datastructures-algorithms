// In-place
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n + m) time | O(1) space - where n and m are the lengths of the linked lists
function mergeLinkedLists(headOne, headTwo) {
    let ptrOne = headOne;
    let ptrTwo = headTwo;
    let winner;

    while (ptrOne !== null && ptrTwo !== null) {
        let smallPtr;
        let largePtr;
        let modify;

        if (ptrOne.value < ptrTwo.value) {
            smallPtr = ptrOne;
            largePtr = ptrTwo;
            modify = 'ptrOne'
        } else {
            smallPtr = ptrTwo;
            largePtr = ptrOne;
            modify = 'ptrTwo'
        }
        if (!winner) winner = modify;

        while (smallPtr.next !== null && smallPtr.next.value <= largePtr.value) {
            smallPtr = smallPtr.next;
        }

        const temp = smallPtr.next;
        smallPtr.next = largePtr;

        if (modify === 'ptrOne') {
            ptrOne = temp;
        } else {
            ptrTwo = temp;
        }
    }
``
    return (winner === 'ptrOne') ? headOne : headTwo;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;