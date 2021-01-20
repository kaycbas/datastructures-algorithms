// O(n) time | O(1) space
const isValidSubsequence = (array, sequence) => {
    for (const val of array) {
        if (sequence[0] === val) sequence.shift();
        if (sequence.length === 0) return true;
    }
    return false;
}