// O(n) time | O(n) space
function sortedSquaredArray(array) {
    const squares = [];
    for (const num of array) {
        squares.push(num * num);
    }
    squares.sort((a, b) => a - b);
    return squares;
}