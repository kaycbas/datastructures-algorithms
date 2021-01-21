// O(n^2) Time | O(1) Space
function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length) {
        let minIdx = startIdx;
        for (let i = startIdx + 1; i < array.length; i++) {
            if (array[i] < array[minIdx]) minIdx = i;
        }
        [array[startIdx], array[minIdx]] = [array[minIdx], array[startIdx]];
        startIdx++;
    }
    return array;
}