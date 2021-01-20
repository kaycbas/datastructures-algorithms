// O(nlog(n)) Time | O(nlog(n)) Space (I think)
const quickSort = (array) => {
    if (array.length < 2) return array;
    const pivot = array[0];
    const slicedArr = array.slice(1);
    let left = slicedArr.filter(el => el <= pivot);
    let right = slicedArr.filter(el => el > pivot);
    return quickSort(left).concat([pivot]).concat(quickSort(right));
}