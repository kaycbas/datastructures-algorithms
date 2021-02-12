// Leet code - https://leetcode.com/problems/verifying-an-alien-dictionary/
// Can be significantly improved
const isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        if (!isOrdered(words[i], words[i+1], order)) return false;
    }
    return true;
};

const isOrdered = function(word1, word2, order) {
    for (let i = 0; i < word1.length; i++) {
        let idx1 = order.indexOf(word1[i]);
        let idx2 = order.indexOf(word2[i]);
        if (idx1 < idx2 && idx2 !== -1) return true;
        if (idx2 < idx1 && idx2 !== -1) return false;
    }
    return word1.length <= word2.length;
}