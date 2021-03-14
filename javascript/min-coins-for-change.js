// O(nd) time | O(n) space
function minNumberOfCoinsForChange(n, denoms) {
  const minCoins = Array(n+1).fill(Infinity);
	minCoins[0] = 0;
	for (const denom of denoms) {
		for (let amount = 1; amount <= n; amount++) {
			if (amount >= denom) {
				let remainder = amount - denom;
				minCoins[amount] = Math.min(minCoins[amount], 1 + minCoins[remainder])
			}
		}	
	}
	return (minCoins[n] === Infinity) ? -1 : minCoins[n];
}