// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  if (!tree) return;
	inOrderTraverse(tree.left, array);
	array.push(tree.value);
	inOrderTraverse(tree.right, array);
	return array;
}

// O(n) time | O(n) space
function preOrderTraverse(tree, array) {
  if (!tree) return;
	array.push(tree.value);
	preOrderTraverse(tree.left, array);
	preOrderTraverse(tree.right, array);
	return array;
}

// O(n) time | O(n) space
function postOrderTraverse(tree, array) {
  if (!tree) return;
	postOrderTraverse(tree.left, array);
	postOrderTraverse(tree.right, array);
	array.push(tree.value);
	return array;
}