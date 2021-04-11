// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(n) space
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let num1Arr = [];
    let ptr = linkedListOne;
    while (ptr !== null) {
        num1Arr.unshift(ptr.value);
        ptr = ptr.next;
    }

    let num2Arr = [];
    ptr = linkedListTwo;
    while (ptr !== null) {
        num2Arr.unshift(ptr.value);
        ptr = ptr.next;
    }

    let num1 = Number(num1Arr.join(''));
    let num2 = Number(num2Arr.join(''));

    const sum = num1 + num2;

    return constructLinkedList(sum);
}

function constructLinkedList(num) {
    const numStr = num.toString();

    let head = new LinkedList(null);
    let ptr = head;
    for (let i = numStr.length - 1; i >= 0; i--) {
        const char = numStr[i];
        const num = Number(char);
        const newNode = new LinkedList(num);
        ptr.next = newNode;
        ptr = newNode;
    }

    return head.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;