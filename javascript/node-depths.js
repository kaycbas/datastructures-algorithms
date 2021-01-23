// O(n) Time | O(n) Space
function nodeDepths(root) {
    let sum = 0;
    let depth = 0;
    return sumDepths(root, depth, sum);
}

function sumDepths(node, depth, sum) {
    if (!node) return sum;
    sum += depth;
    sum = sumDepths(node.left, depth + 1, sum);
    sum = sumDepths(node.right, depth + 1, sum);
    return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}