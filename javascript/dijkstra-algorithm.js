// O(V^2 + E) time | O(V) space - with array for minDists
// O((V + E) * log(V)) time | O(V) space - with minHeap for minDists
function dijkstrasAlgorithm(start, edges) {
	const explored = new Set();
	const minDists = Array(edges.length).fill(Infinity);
	minDists[start] = 0;
	
	while (explored.size < edges.length) {
		let currDist = Infinity;
		let nextIdx;
		
		for (let i = 0; i < minDists.length; i++) {
			if (!explored.has(i) && minDists[i] <= currDist) {
				currDist = minDists[i];
				nextIdx = i;
			}
		}
		
		
		const nextEdges = edges[nextIdx];
		for (let [dest, dist] of nextEdges) {
			const newDist = currDist + dist;
			minDists[dest] = Math.min(minDists[dest], newDist);
		}
		
		explored.add(nextIdx);
	}
	
	return minDists.map(el => el === Infinity ? -1 : el);
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;