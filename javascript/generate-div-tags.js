function generateDivTags(numberOfTags) {
    const validsArr = [];
    divHelper([], numberOfTags, numberOfTags, validsArr)
    return validsArr;
}

function divHelper(prefix, numOpenings, numClosings, validsArr) {
    if (numOpenings === 0 && numClosings === 0) {
        validsArr.push(prefix.join(''));
        return;
    }

    if (numOpenings === numClosings) {
        const prefixWithOpen = prefix.concat('<div>');
        divHelper(prefixWithOpen, numOpenings - 1, numClosings, validsArr);
    } else {
        if (numOpenings > 0) {
            const prefixWithOpen = prefix.concat('<div>');
            divHelper(prefixWithOpen, numOpenings - 1, numClosings, validsArr);
        }
        const prefixWithClose = prefix.concat('</div>');
        divHelper(prefixWithClose, numOpenings, numClosings - 1, validsArr);
    }
}

// Do not edit the line below.
exports.generateDivTags = generateDivTags;