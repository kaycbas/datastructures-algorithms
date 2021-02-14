// O(nlogn) Time | O(1) Space - where n is the number of coins
function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	
	let maxSummable = 0;
	for (const coin of coins) {
		if (coin > maxSummable + 1) return maxSummable + 1;
		maxSummable += coin;
	}
	return maxSummable + 1;
}

const result = nonConstructibleChange([5,7,1,1,2,3,22]);
console.log(result);