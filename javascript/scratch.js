class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
    }

    addNode(val) {
        this.head.next = new Node(val);
        return this.head;
    }
}

const ll = new LinkedList();
const head = ll.addNode(10);
console.log(head);

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {

    }

    parentNode() {

    }

    

    siftDown() {

    }

    siftUp() {

    }
}