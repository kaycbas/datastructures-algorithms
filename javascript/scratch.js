
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
    if (targetIdx < groups.length - 1 ) {
      calcCombos(groups, targetIdx + 1, newStr, combos)
    } else {
      combos.push(newStr);
    }
  }
  return combos;
}
​
50
​
51
// Do not edit the line below.
52
exports.phoneNumberMnemonics = phoneNumberMnemonics;
53
​

Custom Output

Raw Output
Yay, your code passed all the test cases!

12 / 12 test cases passed.

Test Case 1 passed!
Test Case 2 passed!
Test Case 3 passed!
Test Case 4 passed!
Test Case 5 passed!
Test Case 6 passed!
Test Case 7 passed!
Test Case 8 passed!
Test Case 9 passed!
Test Case 10 passed!
Test Case 11 passed!
Test Case 12 passed!
