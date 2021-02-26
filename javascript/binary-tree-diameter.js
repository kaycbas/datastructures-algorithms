class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space - where n is the number of tree nodes
function binaryTreeDiameter(tree) {
	return calcNode(tree).diameter;
}

function calcNode(node) {
	if (!node) return { height: 0, diameter: 0 };
	
	const leftInfo = calcNode(node.left);
	const rightInfo = calcNode(node.right);
	
	const curDiameter = leftInfo.height + rightInfo.height;
	const diameter = Math.max(leftInfo.diameter, rightInfo.diameter, curDiameter);
	const height = Math.max(leftInfo.height, rightInfo.height) + 1;
	
	return { height, diameter };
}