// O(n) time | O(n) space - where n is the length of the input array
function maxSubsetSumNoAdjacent(array) {
	if (array.length === 0) return 0;
	
  const maxes = [];
	for (let i = 0; i < array.length; i++) {
		if (i === 0) {
			maxes.push(array[i]);
		} else if (i === 1) {
			maxes.push(Math.max(array[0], array[1]));
		} else {
			const prev = maxes[maxes.length - 1];
			const prevPrev = maxes[maxes.length - 2];
			const newMax = Math.max(prev, prevPrev + array[i]);
			maxes.push(newMax);
		}
	}
	
	return maxes[maxes.length - 1];
}g