// O(n) Time | O(n) Space
function invertBinaryTree(tree) {
	const queue = [tree];
	while (queue.length > 0) {
		const node = queue.shift();
		swapChildren(node);
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
	return tree;
}

function swapChildren(node) {
	const temp = node.left;
	node.left = node.right;
	node.right = temp;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}