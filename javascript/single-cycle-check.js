// O(n) time | O(1) space - where n is the length of the array
function hasSingleCycle(array) {
	let currIdx = 0;
	let numExplored = 0;
	
	while (numExplored < array.length) {
		if (numExplored > 0 && currIdx === 0) return false;
		numExplored++;
		currIdx = getNextIdx(currIdx, array);		
	}
	
	return currIdx === 0;
}

function getNextIdx(currIdx, array) {
	let newIdx = (currIdx + array[currIdx]) % array.length;
	return (newIdx < 0) ? array.length + newIdx : newIdx; 
}