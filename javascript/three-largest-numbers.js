// O(n) time | O(1) Space
function findThreeLargestNumbers(array) {
    let largests = [];
    let usedIdxs = [];
    const min = Math.min(...array);
    for (let i = 0; i < 3; i++) {
        let nextMax = min;
        let nextIdx = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > nextMax && !usedIdxs.includes(j)) {
                nextMax = array[j];
                nextIdx = j;
            }
        }
        largests.unshift(nextMax);
        usedIdxs.push(nextIdx);
    }
    return largests;
}