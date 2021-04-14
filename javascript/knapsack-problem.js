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

// ---
// with indices...
//
// O(nc) time | O(nc) space
function knapsackProblem(items, capacity) {
  let maxVals = new Array(items.length + 1).fill(undefined);
	maxVals = maxVals.map(ele => new Array(capacity + 1).fill(0));
	
	for (let w = 0; w <= capacity; w++) {
		maxVals[0][w] = [0, []];
	}
	
	for (let i = 1; i <= items.length; i++) {
		const [itemVal, itemWeight] = items[i-1];
		
		for (let w = 0; w <= capacity; w++) {
			if (itemWeight > w) {
				maxVals[i][w] = maxVals[i - 1][w];
			} else {
				const [oldVal, oldIndices] = maxVals[i - 1][w];
				const [tempVal, tempIndices] = maxVals[i - 1][w - itemWeight];
				const [newVal, newIndices] = [tempVal + itemVal, tempIndices.concat([i - 1])];
				
				if (newVal > oldVal) {
					maxVals[i][w] = [newVal, newIndices];
				} else {
					maxVals[i][w] = [oldVal, oldIndices];
				}
			}
		}
	}
	
	return maxVals[items.length][capacity];
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;

