// O(log(n)) Time | O(log(n)) Space
function findClosestValueInBst(tree, target) {
	const closest = tree.value;
	return findClosestHelper(tree, target, closest);
}

function findClosestHelper(node, target, closest) {
	if (!node) return closest;
	if (Math.abs(node.value - target) < Math.abs(closest - target)) {
		closest = node.value;
	}
	if (target < node.value) {
		return findClosestHelper(node.left, target, closest);
	} else if (target > node.value) {
		return findClosestHelper(node.right, target, closest);
	} else {
		return closest;
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}