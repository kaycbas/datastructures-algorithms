// Leetcode: https://leetcode.com/problems/container-with-most-water/
// O(n) time | O(1) space - where n i height.length
var maxArea = function(height) {
    let ptr1 = 0;
    let ptr2 = height.length - 1;
    let max = 0;
    
    while (ptr1 < ptr2) {
        max = Math.max(max, calcHeight(height, ptr1, ptr2));
        (height[ptr1] < height[ptr2]) ? ptr1++ : ptr2--;
    }
    
    return max;
}

const calcHeight = function(height, i, j) {
    return Math.abs(j-i) * Math.min(height[i], height[j]);
}