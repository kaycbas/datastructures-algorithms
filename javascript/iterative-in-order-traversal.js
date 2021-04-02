// O(n) time | O(1) space - where n is the number of nodes in the tree
function iterativeInOrderTraversal(tree, callback) {	
  let currNode = tree;
	let prevNode = null;
	
	while(currNode !== null) {		
		if (prevNode === currNode.parent) { // direction === right
			if (currNode.left) {
				prevNode = currNode;
				currNode = currNode.left;
			} else {
				callback(currNode);
				if (currNode.right) {
					prevNode = currNode;
					currNode = currNode.right;
				} else {
					prevNode = currNode;
					currNode = currNode.parent;
				}
			}
		} else if (prevNode === currNode.left) { // direction === left
			callback(currNode);
			if (currNode.right) {
				prevNode = currNode;
				currNode = currNode.right;
			} else {
				prevNode = currNode;
				currNode = currNode.parent;
			}
		} else { // direction === up
			prevNode = currNode;
			currNode = currNode.parent;
		}
	}
}

// Do not edit the line below.
exports.iterativeInOrderTraversal = iterativeInOrderTraversal;
