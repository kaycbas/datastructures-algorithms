// O(nm) time | O(1) space - where n & m are the dimensions of the matrix
function riverSizes(matrix) {
    const riverSizes = [];

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 1) {
                const size = exploreRiver(matrix, y, x);
                riverSizes.push(size);
            }
        }
    }

    return riverSizes;
}

function exploreRiver(matrix, y, x, count = 0) {
    if (y < 0 || y >= matrix.length) return count;
    if (x < 0 || x >= matrix[0].length) return count;
    if (matrix[y][x] !== 1) return count;

    count++;
    matrix[y][x] = 0;

    const deltas = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    for (const delta of deltas) {
        count = exploreRiver(matrix, y + delta[0], x + delta[1], count);
    }

    return count;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;