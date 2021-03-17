// O(nlogn) time | O(1) space
function heapSort(array) {
  let heap = buildMaxHeap(array);
	return heapSortHelper(heap);
}

// O(n) time
function buildMaxHeap(array) {
	const lastIdx = array.length - 1;
	let parentIdx = Math.floor((lastIdx - 1) / 2);
	for (let currIdx = parentIdx; currIdx >= 0; currIdx--) {
		siftDown(array, currIdx);
	}
	return array;
}

// O(logn) time
function siftDown(heap, idx, heapEnd = heap.length - 1) {
	let childIdx1 = (2 * idx) + 1;
	let childIdx2 = (2 * idx) + 2;
	let maxChildIdx = childIdx1;
	
	while(childIdx1 <= heapEnd) {
		if (childIdx2 <= heapEnd && heap[childIdx2] > heap[childIdx1]) {
			maxChildIdx = childIdx2;
		}
		if(heap[idx] > heap[maxChildIdx]) break;
		swap(heap, idx, maxChildIdx);
		
		idx = maxChildIdx;
		childIdx1 = (2 * idx) + 1;
		childIdx2 = (2 * idx) + 2;
		maxChildIdx = childIdx1;
	}
	return heap;
}

// O(nlogn) time
function heapSortHelper(heap) {
	let heapEnd = heap.length - 1;
	
	while (heapEnd > 0) {
		swap(heap, 0, heapEnd);
		heapEnd--;
		siftDown(heap, 0, heapEnd); // modify siftDown
	}
	return heap;
}

function swap(array, idx1, idx2) {
	[array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

// Do not edit the line below.
exports.heapSort = heapSort;