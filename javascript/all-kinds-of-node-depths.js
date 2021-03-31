// O(n) time | O(h) space - where n is num nodes, h is tree height
// I think this is better than the AlgoExpert solution...
function allKindsOfNodeDepths(root) {
  return nodeDepthsHelper(root).total;
}

function nodeDepthsHelper(node) {
	if (!node.left && !node.right) {
		return { sum: 0, size: 1, total: 0 };
	}
	let resLeft = { sum: 0, size: 0, total: 0 };
	let resRight = { sum: 0, size: 0, total: 0 };
	
	if (node.left) {
		resLeft = nodeDepthsHelper(node.left);
	}
	if (node.right) {
		resRight = nodeDepthsHelper(node.right);
	}
	
	const size = resLeft.size + resRight.size;
	const sum = resLeft.sum + resRight.sum + size;
	const newTotal = sum + resLeft.total + resRight.total;
	
	return { sum, size: size + 1, total: newTotal };
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.allKindsOfNodeDepths = allKindsOfNodeDepths;
