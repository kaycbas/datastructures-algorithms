// O(n) Time | O(d) Space - where n is the number of elements, and d is the max depth of special arrays
function productSum(arr) {
  const lvl = 1;
	return prodSumHelper(arr, lvl);
}

const prodSumHelper = (arr, lvl) => {
	let sum = 0;
	for (el of arr) {
		if (!Array.isArray(el)) {
			sum += el;
		} else {
			sum += prodSumHelper(el, lvl + 1);
		}
	}
	return sum * lvl;
}