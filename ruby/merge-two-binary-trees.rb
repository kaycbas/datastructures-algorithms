# Leetcode: https://leetcode.com/problems/merge-two-binary-trees/
# O(n) time | O(1) space - where n is number of nodes
def merge_trees(node1, node2)
    return node1 if node2 == nil
    return node2 if node1 == nil
    
    node1.val += node2.val
    node1.left = merge_trees(node1.left, node2.left)
    node1.right = merge_trees(node1.right, node2.right)
    
    return node1
end