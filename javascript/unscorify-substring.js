// O(n + m) time | O(n) space - where n is the length of the main string
// and m is the length of the substring
function underscorifySubstring(string, substring) {
    const indices = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === substring[0]) {
            if (isMatch(string, substring, i)) {
                indices.push([i, i + substring.length]);
            }
        }
    }

    const mergedIndices = [indices[0]];
    for (let i = 0; i < indices.length; i++) {
        const currIdx = indices[i];
        const lastMergedIdx = mergedIndices[mergedIndices.length - 1];
        if (currIdx[0] <= lastMergedIdx[1]) {
            lastMergedIdx[1] = currIdx[1];
        } else {
            mergedIndices.push(currIdx);
        }
    }

    const flatIndices = mergedIndices.flat();
    let ptr = 0;
    const resArr = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (i === flatIndices[ptr]) {
            resArr.push('_', char);
            ptr++;
        } else {
            resArr.push(char);
        }
    }

    if (flatIndices.length > 1 && ptr < flatIndices.length) {
        resArr.push('_');
    }

    return resArr.join('');
}

function isMatch(str, subStr, startIdx) {
    for (let i = 0; i < subStr.length; i++) {
        const strChar = str[startIdx + i];
        const subChar = subStr[i];
        if (strChar !== subChar) return false;
    }
    return true;
}

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;