// O(nlogn) time | O(nlogn) space
function minHeightBst(array, root = null) {
	if (array.length === 0) return;
	
	const mid = Math.floor(array.length / 2);
	if (!root) {
		root = new BST(array[mid]);
	} else {
		root.insert(array[mid]);
	}
	
	minHeightBst(array.slice(0, mid), root);
	minHeightBst(array.slice(mid+1), root);
	
	return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}