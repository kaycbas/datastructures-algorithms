function sortKSortedArray(array, k) {
	if (k === 0) return array;
	const limit = Math.min(array.length, k + 1)
	
	const minHeap = new MinHeap(array.slice(0, limit));
	let ptr = k + 1;
	const resArr = [];
	
	while (resArr.length < array.length) {
		const minEle = minHeap.remove();
		resArr.push(minEle);
		
		if (ptr < array.length) {
			minHeap.insert(array[ptr]);
			ptr++;
		}
	}
	
  return resArr;
}


class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let firstParent = Math.floor((array.length - 1)/2);
		for (let current = firstParent; current >= 0; current--) {
			this.siftDown(current, array.length - 1, array);
		}
		
		return array;
  }

  siftDown(current, end, heap) {
    let childOne = current * 2 + 1;
		while (childOne <= end) {
			const childTwo = current * 2 + 2 <= end ? current * 2 + 2 : -1;
			let toSwap;
			if (childTwo !== -1 && heap[childTwo] < heap[childOne]) {
				toSwap = childTwo;
			} else {
				toSwap = childOne;
			}
			if (heap[toSwap] < heap[current]) {
				this.swap(current, toSwap, heap);
				current = toSwap;
				childOne = current * 2 + 1;
			} else {
				return;
			}
		}
  }

  siftUp(current, heap) {
    let parent = Math.floor((current-1)/2);
		while (current > 0 && heap[current] < heap[parent]) {
			this.swap(current, parent, heap);
			current = parent;
			parent = Math.floor((current-1)/2);
		}
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length-1, this.heap);
		let valueToRemove = this.heap.pop();
		this.siftDown(0, this.heap.length-1, this.heap);
		return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
		this.siftUp(this.heap.length-1, this.heap);
  }
	
	swap(a, b, heap) {
		let temp = heap[a];
		heap[a] = heap[b];
		heap[b] = temp;
	}
}

// Do not edit the line below.
exports.sortKSortedArray = sortKSortedArray;
