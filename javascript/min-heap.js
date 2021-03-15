class MinHeap {
    constructor() {
        // let capacity = 10;
        let size = 0;
        let items = [];
    }

    getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
    getParentIndex(childIndex) { return (childIndex - 1) / 2; }

    hasLeftChild(index) { return this.getLeftChildIndex(index) < size; }
    hasRightChild(index) { return this.getRightChildIndex(index) < size; }
    hasParent(index) { return this.getParentIndex(index) >= 0; }

    leftChild(index) { return items[this.getLeftChildIndex(index)]; }
    rightChild(index) { return items[this.getRightChildIndex(index)]; }
    parent(index) { return items[this.getParentIndex(index)]; }

    swap(indexOne, indexTwo) {
        let temp = items[indexOne];
        items[indexOne] = items[indexTwo];
        items[indexTwo] = temp;
    }

    peek() {

    }
}