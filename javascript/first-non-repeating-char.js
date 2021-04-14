// O(n) time | O(1) space - where n is the length of the string
// O(1) space because at most there will 26 entries in the hash table
function firstNonRepeatingCharacter(string) {
    const counts = {};

    for (const char of string) {
        counts[char] = ++counts[char] || 1;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (counts[char] === 1) return i;
    }

    return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;