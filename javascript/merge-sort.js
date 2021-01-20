// O(nlog(n)) Time | O(nlog(n)) Space
const mergeSort = (array) => {
    if (array.length < 2) return array;
    const mid = Math.floor(array.length / 2);
    const sortedLeft = mergeSort(array.slice(0, mid));
    const sortedRight = mergeSort(array.slice(mid));
    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
    let merged = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    return merged.concat(left).concat(right);
}