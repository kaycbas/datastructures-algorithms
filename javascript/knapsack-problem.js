function knapsackProblem(items, capacity) {
  let maxVals = new Array(items.length + 1).fill(undefined);
	maxVals = maxVals.map(ele => new Array(capacity + 1).fill(0));
	
	for (let w = 0; w <= capacity; w++) {
		maxVals[0][w] = 0;
	}
	
	for (let i = 1; i <= items.length; i++) {
		const [newVal, newWeight] = items[i-1];
		
		for (let w = 0; w <= capacity; w++) {
			if (newWeight > w) {
				maxVals[i][w] = maxVals[i - 1][w];
			} else {
				const withoutNewVal = maxVals[i - 1][w];
				const withNewVal = maxVals[i - 1][w - newWeight] + newVal;
				maxVals[i][w] = Math.max(withoutNewVal, withNewVal);
			}
		}
	}
	
	
	const totalValue = maxVals[items.length][capacity];
    return totalValue;
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
