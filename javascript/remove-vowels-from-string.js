// O(n) time | O(n) space - where n is the length of the string
var removeVowels = function(s) {
    const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};
    const resArr = [];
    
    for (const char of s) {
        if (!vowels[char]) resArr.push(char);
    }
    
    return resArr.join('');
};