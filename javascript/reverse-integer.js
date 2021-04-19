// Leetcode: https://leetcode.com/problems/reverse-integer/submissions/
// O(n) time | O(n) space
var reverse = function (x) {
    if (x === 0) return 0;

    const reversed = [];
    const isNeg = x < 0;
    x = Math.abs(x);

    while (x >= 1) {
        reversed.push(x % 10);
        x = Math.floor(x / 10);
    }
    const result = parseInt(reversed.join(''))
    if (result > ((2 ** 31) - 1)) return 0;
    return isNeg ? -result : result;
};