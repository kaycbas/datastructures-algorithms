// O(n) time | O(n) space - where n is the length of each array
function sameBsts(arrayOne, arrayTwo) {
	if (arrayOne.length !== arrayTwo.length) return false;
	
	const treeOne = constructTreeArr(arrayOne);
	const treeTwo = constructTreeArr(arrayTwo);
	
	return treeOne.every((ele, idx) => ele === treeTwo[idx]);
}

function constructTreeArr(nodes) {
	const tree = new Array(nodes.length).fill(undefined);
	
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		
		let ptr = 1;
		while (tree[ptr - 1]) {
			ptr = (node < tree[ptr - 1]) ? 2 * ptr : (2 * ptr) + 1;
		}
		
		tree[ptr - 1] = node;
	}
	
	return tree;
}

// Do not edit the line below.
exports.sameBsts = sameBsts;
