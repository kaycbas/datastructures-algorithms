// O(w * h) time | O(w * h) space
// where w is width of matrix and h is height
function maximumSumSubmatrix(matrix, size) {
    const sums = createSumsMatrix(matrix);
    let maxSum = -Infinity;

    for (let row = size - 1; row < matrix.length; row++) {
        for (let col = size - 1; col < matrix[0].length; col++) {
            let sum = sums[row][col];

            let touchesTop = row - size < 0;
            if (!touchesTop) sum -= sums[row - size][col];

            let touchesLeft = col - size < 0;
            if (!touchesLeft) sum -= sums[row][col - size];

            if (!touchesTop && !touchesLeft) {
                sum += sums[row - size][col - size]
            }

            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
}

function createSumsMatrix(matrix) {
    const sums = [];
    for (let row = 0; row < matrix.length; row++) {
        sums.push([]);
        for (let col = 0; col < matrix[0].length; col++) {
            sums[row].push(0);
        }
    }
    sums[0][0] = matrix[0][0];

    // sum up first row
    for (let col = 1; col < matrix[0].length; col++) {
        sums[0][col] = sums[0][col - 1] + matrix[0][col];
    }

    // sum up first col
    for (let row = 1; row < matrix.length; row++) {
        sums[row][0] = sums[row - 1][0] + matrix[row][0];
    }

    // sum up the rest
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            sums[row][col] = sums[row - 1][col] + sums[row][col - 1] - sums[row - 1][col - 1] + matrix[row][col];
        }
    }

    return sums;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;