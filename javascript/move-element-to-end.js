// O(n) Time (if implemented with linked list) | O(1) Space - where n is the length of the array
function moveElementToEnd(array, toMove) {
	let count = 0;
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === toMove) {
			array.splice(i, 1);
			array.push(toMove);
		}
	}
	return array;
}

// Better
// O(n) Time | O(1) Space - where n is the length of the array
function moveElementToEnd(array, toMove) {
  let i = 0;
	let j = array.length - 1;
	while (i < j) {
		while (i < j && array[j] === toMove) j--;
		if (array[i] === toMove) swap(array, i, j);
		i++;
	}
	return array;
}

const swap = (array, i, j) => {
	[array[i], array[j]] = [array[j], array[i]]
}