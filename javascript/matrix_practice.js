let matrix = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]

const rotate = matrix => {

}

const transpose = matrix => {
    const transposed = [];
    for (let x = 0; x < matrix[0].length; x++) {
        const newRow = [];
        for (let y = 0; y < matrix.length; y++) {
            newRow.push(matrix[y][x]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

const transpose_map = matrix => {
    return matrix[0].map((col, x) => (
        matrix.map((row) => row[x])
    ));
}

console.log(transpose(matrix));
console.log(transpose_map(matrix));