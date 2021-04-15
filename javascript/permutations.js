// O(n! * n) time | O(n! * n) space - where n is the length of the array
function getPermutations(array) {
    return getPermsHelper(array, [], []);
}

function getPermsHelper(array, perm, permsArr) {
    if (array.length === 0) {
        if (perm.length > 0) permsArr.push(perm);
        return permsArr;
    }

    for (let i = 0; i < array.length; i++) {
        let newPerm = [...perm];
        let newArr = [...array];

        newPerm.push(array[i]);
        newArr.splice(i, 1);

        getPermsHelper(newArr, newPerm, permsArr);
    }

    return permsArr;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;