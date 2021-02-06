// Leet Code: https://leetcode.com/problems/decode-string/

// O(n) Time | O(m) Space - where m is the max depth of brackets
const decodeString = function(s) {
    let decoded = [];
    
    let i = 0;
    while (i < s.length) {
        if (isNumeric(s[i])) {
            const openIdx = s.indexOf('[', i);
            const closeIdx = findCloseIdx(s, openIdx);
            
            let k = s.slice(i, openIdx);
            k = Number(k);
            
            const sub = decodeString(s.slice(openIdx+1, closeIdx));
            decoded = decoded.concat(sub.repeat(k));
            
            i = closeIdx;
        } else {
            decoded.push(s[i]);
        }
        i++;
    }
    return decoded.join('');
};
    
const isNumeric = (str) => (!isNaN(str));

const findCloseIdx = (str, openIdx) => {
    let openCount = 1;
    for (let i = openIdx + 1; i < str.length; i++) {
        if (str[i] === '[') openCount++;
        if (str[i] === ']') openCount--;   
        if (openCount === 0) return i;
    }
}