// O(n) Time | O(1) Space - where n is the length of the array
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