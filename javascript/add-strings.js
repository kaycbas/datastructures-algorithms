// Leet: https://leetcode.com/problems/add-strings/
// O(1) time | O(1) space
var addStrings = function(num1, num2) {
    const sum = BigInt(num1) + BigInt(num2);
    return sum.toString();
};