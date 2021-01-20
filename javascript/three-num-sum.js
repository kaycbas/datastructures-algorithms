// O(n^2) time | O(n) space
const threeNumberSum = (arr, target) => {
	let triplets = [];
    arr.sort((a, b) => a - b); // n*log(n)
    for (let i = 0; i < arr.length-2; i++) { // n
        const num1 = arr[i];
        let low = i + 1;
        let high = arr.length-1;
        while (low < high) { // n
            if (arr[low] + arr[high] > target - num1) {
                high--;
            } else if (arr[low] + arr[high] < target - num1) {
                low++;
            } else {
                triplets.push([num1, arr[low], arr[high]]);
                low++;
            }
        }
    }
    return triplets;
}