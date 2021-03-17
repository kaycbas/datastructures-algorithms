// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    // O(n) time
    buildHeap(array) {
        const lastIdx = array.length - 1;
        let parentIdx = Math.floor((lastIdx - 1) / 2);
        for (let i = parentIdx; i >= 0; i--) {
            this.siftDown(array, i);
        }
        return array;
    }

    // O(logn) time
    siftDown(array, idx) {
        let childIdx1 = (idx * 2) + 1;
        let childIdx2 = (idx * 2) + 2;
        let minChildIdx = childIdx1;

        while (childIdx1 < array.length) {
            if (childIdx2 < array.length && array[childIdx2] < array[childIdx1]) {
                minChildIdx = childIdx2;
            }
            if (array[minChildIdx] > array[idx]) break;
            this.swap(array, idx, minChildIdx);

            idx = minChildIdx;
            childIdx1 = (idx * 2) + 1;
            childIdx2 = (idx * 2) + 2;
            minChildIdx = childIdx1;
        }
    }

    // O(logn) time
    siftUp(heap, idx) {
        let parentIdx = Math.floor((idx - 1) / 2);
        while (parentIdx >= 0) {
            if (heap[parentIdx] < heap[idx]) break;
            this.swap(heap, idx, parentIdx);
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    // O(1) time
    peek() {
        return this.heap[0];
    }

    // )(logn) time
    remove() {
        const rootVal = this.heap[0];
        const lastVal = this.heap.pop();
        this.heap[0] = lastVal;
        this.siftDown(this.heap, 0);
        return rootVal;
    }

    // O(logn) time
    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap, this.heap.length - 1);
    }

    // O(1) time
    swap(heap, i, j) {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;