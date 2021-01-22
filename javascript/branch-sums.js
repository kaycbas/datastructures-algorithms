class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const branchSums = (root) => {
    const sumsArr = [];
    calcBranchSums(root, sumsArr, 0);
    return sumsArr;
}

const calcBranchSums = (node, sumsArr, runningSum) => {
    if (!node) return;

    const newRunningSum = runningSum + node.value;
    if (isLeaf(node)) {
        sumsArr.push(newRunningSum);
        return;
    }

    calcBranchSums(node.left, sumsArr, newRunningSum);
    calcBranchSums(node.right, sumsArr, newRunningSum);
}

const isLeaf = (node) => {
    return !node.left && !node.right;
}