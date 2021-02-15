// O(n) Time | O(n) Space - where n is the number of elements
function longestPeak(array) {
  const peaks = [];
	for (let i = 0; i < array.length - 1; i++) {
		if (isPeak(array, i)) peaks.push(i);
	}
	let longestPeak = 0;
	for (const peak of peaks) {
		const length = peakLength(array, peak);
		longestPeak = Math.max(longestPeak, length);
	}
	return longestPeak;
}

function isPeak(array, i) {
	if (i === 0 || i === array.length - 1) return false;
	return (array[i-1] < array[i]) && (array[i] > array[i+1]);
}

function peakLength(array, idx) {
	let count = 1;
	for (let i = idx-1; i >= 0; i--) {
		if (array[i] < array[i+1]) {
			count++;
		} else {
			break;
		}
	}
	for (let i = idx+1; i < array.length; i++) {
		if (array[i] < array[i-1]) {
			count++;
		} else {
			break;
		}
	}
	return count;
}