class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) Time | O(n) Space - where n is the number of nodes in the tree
function validateBst(tree) {
	let max = Infinity;
	let min = -Infinity;
	
	return validateBstHelper(tree);
}

function validateBstHelper(node, min, max) {
	if (node === null) return true;
	if (node.value < min || node.value >= max) return false;
	
	const validLeft = validateBstHelper(node.left, min, node.value);
	const validRight = validateBstHelper(node.right, node.value, max);
	return validLeft && validRight;
}