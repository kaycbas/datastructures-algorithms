// O(n) Time | O(n) Space
var runningSum = function(nums) {
    const runningSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const lastSum = runningSum[runningSum.length - 1];
        runningSum.push(lastSum + nums[i]);
    }
    return runningSum;
};