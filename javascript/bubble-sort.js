// O(n^2) time | O(1) space
const bubbleSort = (arr) => {
    let sorted = false;
    let numBubbled = 0;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < arr.length-1-numBubbled; i++) {
			if (arr[i] > arr[i+1]) {
				[arr[i+1], arr[i]] = [arr[i], arr[i+1]];
				sorted = false;
			}
		}
		numBubbled++;
	}
	return arr;
}