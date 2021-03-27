// O(n^2) time | O(1) space
const twoNumberSum = (array, targetSum) => {
	for (let i = 0; i < array.length - 1; i++) {
		const num1 = array[i];
		for (let j = i + 1; j < array.length; j++) {
			const num2 = array[j];
			if (num1 + num2 === targetSum) return [num1, num2];
		}
	}
	return [];
}

// O(n) time | O(n) space - where n is length of nums
var twoSum = function(nums, target) {
    const found = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const otherNum = target - num;
        if (otherNum in found) return [i, found[otherNum]];
        found[num] = i;
    }
    return [];
};