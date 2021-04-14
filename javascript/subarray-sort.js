// O(n) time | O(1) space
function subarraySort(array) {
    let smallestUnsorted = Infinity;
    let largestUnsorted = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (!isSorted(array, i)) {
            smallestUnsorted = Math.min(smallestUnsorted, array[i]);
            largestUnsorted = Math.max(largestUnsorted, array[i]);
        }
    }

    let startIdx = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > smallestUnsorted) {
            startIdx = i;
            break;
        }
    }

    let endIdx = -1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < largestUnsorted) {
            endIdx = i;
            break;
        }
    }

    return [startIdx, endIdx];
}

function isSorted(array, idx) {
    if (array[idx] < array[idx - 1]) return false;
    if (array[idx] > array[idx + 1]) return false;
    return true;
}

// Do not edit the line below.
exports.subarraySort = subarraySort;