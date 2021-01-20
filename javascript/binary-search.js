// O(log(n)) time
function binarySearch(arr, target) {
    if (arr.length === 0) return -1;
    const mid = Math.floor(arr.length / 2);
    if (target < arr[mid]) {
        return binarySearch(arr.slice(0, mid), target);
    } else if (target > arr[mid]) {
        const idx = binarySearch(arr.slice(mid + 1), target);
        return idx === -1 ? -1 : mid + 1 + idx;
    } else {
        return mid;
    }
}