// O(n^3 + m) time | O(n + m) space - where n is the number of digits in pi and m is the number of eles in numbers
function numbersInPi(pi, numbers) {
	const numbersTable = {};
	for (const num of numbers) {
		numbersTable[num] = true;
	}
	const cache = {};
  const minSpaces = getMinSpaces(pi, numbersTable, cache, 0);
	return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numbersTable, cache, idx) {
	if (idx === pi.length) return -1;
	if (idx in cache) return cache[idx];
	let minSpaces = Infinity;
	
	for (let i = idx; i < pi.length; i++) {
		const prefix = pi.slice(idx, i + 1);
		if (prefix in numbersTable) {
			const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
			minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
		}
	}
	
	cache[idx] = minSpaces;
	return cache[idx];
}

exports.numbersInPi = numbersInPi;
