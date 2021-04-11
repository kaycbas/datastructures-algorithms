function phoneNumberMnemonics(phoneNumber) {
    const phoneMappings = {
        '0': '0',
        '1': '1',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const groups = [];
    for (const num of phoneNumber) {
        const group = phoneMappings[num];
        groups.push(group);
    }
    const combos = calcCombos(groups, 0, '', []);
    return combos;
}

function calcCombos(groups, targetIdx, currStr, combos) {
    const targetGroup = groups[targetIdx];
    for (const char of targetGroup) {
        let newStr = currStr + char;
        if (targetIdx < groups.length - 1) {
            calcCombos(groups, targetIdx + 1, newStr, combos)
        } else {
            combos.push(newStr);
        }
    }
    return combos;
}