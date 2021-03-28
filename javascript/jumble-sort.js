// O(n^2) time | O(n) space - where n is the length of the str
function jumbleSort(str, alpha = 'abcdefghijklmnopqrstuvwxyz') {
    let sorted = false;
    let numBubbled = 0;
    const strArr = str.split('');

    while(!sorted) {
        sorted = true;

        for (let i = 0; i < strArr.length - 1 - numBubbled; i++) {
            const char1 = strArr[i];
            const char2 = strArr[i+1];

            if (alpha.indexOf(char1) > alpha.indexOf(char2)) {
                [strArr[i], strArr[i+1]] = [strArr[i+1], strArr[i]];
                sorted = false;
            }
        }

        numBubbled++;
    }
    
    return strArr.join('');
}