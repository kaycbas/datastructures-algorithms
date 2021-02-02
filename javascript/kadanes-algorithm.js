// O(n) Time | O(1) Space
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
	let maxSum = array[0];
	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		maxEndingHere = Math.max(num, maxEndingHere + num);
		maxSum = Math.max(maxEndingHere, maxSum);
	}
	return maxSum;
}