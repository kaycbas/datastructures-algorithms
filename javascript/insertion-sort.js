// Best: O(n) Time | O(1) Space
// Worst: O(n^2) Time | O(1) Space
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
		const key = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = key;
	}
	return array;
}