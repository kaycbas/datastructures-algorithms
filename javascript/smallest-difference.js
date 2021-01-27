// O(nlog(n)) Time | O(1) Space
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a - b);
	arrayTwo.sort((a,b) => a - b);
	
	let smallest = [];
	let smallestDiff = Infinity;
	
	let i = 0;
	let j = 0;
	while (true) {
		const el1 = arrayOne[i];
		const el2 = arrayTwo[j];
		const diff = Math.abs(el1 - el2);
		if (diff < smallestDiff) {
			smallestDiff = diff;
			smallest = [el1, el2];
		}
		if (i === arrayOne.length - 1 && j === arrayTwo.length - 1) break;
		if (i === arrayOne.length - 1) {
			j++;
		} else if (j === arrayTwo.length - 1) {
			i++
		} else if (el1 < el2) {
			i++;
		} else {
			j++;
		}
	}
	return smallest;
}