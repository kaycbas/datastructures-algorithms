class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// O(n) Time | O(n) Space - where n is the number of tree nodes
function findSuccessor(tree, node) {
	const array = [];
	findSuccessorHelper(tree, array);
	const idx = array.indexOf(node);
	return array[idx+1];
}

function findSuccessorHelper(node, array) {
	if (node === null) return;
	findSuccessorHelper(node.left, array);
	array.push(node);
	findSuccessorHelper(node.right, array);
}