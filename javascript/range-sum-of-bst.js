// Leetcode: https://leetcode.com/problems/range-sum-of-bst/
// O(n) Time | O(n) Space - where n is the number of tree nodes
const rangeSumBST = function(root, low, high) {
    return rangeSumHelper(root, low, high, 0);
};

const rangeSumHelper = function(node, low, high, sum) {
    if (!node) return sum;
    if (node.val < low) {
        sum = rangeSumHelper(node.right, low, high, sum);
    } else if (node.val > high) {
        sum = rangeSumHelper(node.left, low, high, sum);
    } else {
        sum += node.val;
        sum = rangeSumHelper(node.left, low, high, sum);
        sum = rangeSumHelper(node.right, low, high, sum);
    }
    return sum;
}