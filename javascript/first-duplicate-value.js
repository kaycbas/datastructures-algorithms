// O(n) time | O(1) space
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
		const idx = toIdx(array[i]);
		if (array[idx] < 0) return Math.abs(array[i]);
		array[idx] *= -1;
	}
	
  return -1;
}

function toIdx(num) {
	return Math.abs(num) - 1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;