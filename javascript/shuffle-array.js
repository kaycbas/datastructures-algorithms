function shuffle(arr) {
    let currIdx = arr.length - 1;
    let randomIdx;

    while (currIdx !== 0) {
        randomIdx = Math.floor(Math.random() * currIdx);
        swap(arr, currIdx, randomIdx);
        currIdx -= 1;
    }

    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [1,2,3,4,5,6,7,8,9];
console.log(shuffle(arr));