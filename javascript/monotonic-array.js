// O(n) Time | O(1) Space - where n is the length of the array
function isMonotonic(array) {
	if (array.length <= 2) return true;
	
  let dir = 0;
	for (let i = 1; i < array.length; i++) {
		if (array[i] > array[i-1]) {
			if (dir < 0) return false;
			dir = 1;
		} else if (array[i] < array[i-1]) {
			if (dir > 0) return false;
			dir = -1;
		}
	}
	return true;
}