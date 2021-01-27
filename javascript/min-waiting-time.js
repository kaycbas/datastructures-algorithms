// O(nlog(n)) Time | O(1) Space
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
	let waitingTime = 0;
	let sumSoFar = 0;
	for (let i = 0; i < queries.length - 1; i++) {
		sumSoFar += queries[i];
		waitingTime += sumSoFar;
	}
	return waitingTime;
}