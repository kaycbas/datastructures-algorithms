// O(1) time | O(1) space - assuming 9x9 input board
function solveSudoku(board) {
	solveSudokuTile(board, 0, 0);
	return board
}

function solveSudokuTile(board, row, col) {
	if (row === 9) return true;
	
	if (board[row][col] === 0) {
		return tryDigitsAtPosition(board, row, col)
	}
	
	const [nextRow, nextCol] = nextSpot(row, col);
	return solveSudokuTile(board, nextRow, nextCol);
}

function tryDigitsAtPosition(board, row, col) {
	for (let digit = 1; digit < 10; digit++) {
		
		if (isValid(board, row, col, digit)) {
			board[row][col] = digit;
			const [nextRow, nextCol] = nextSpot(row, col);
			
			if (solveSudokuTile(board, nextRow, nextCol)) return true;
		}
	}
	
	board[row][col] = 0;
	return false;
}
	
function isValid(board, row, col, digit) {
	if (board[row].includes(digit)) return false;
	if (board.map(row => row[col]).includes(digit)) return false;
	
	let subStartRow = Math.floor(row / 3) * 3;
	let subStartCol = Math.floor(col / 3) * 3;
	
	for (let subRow = subStartRow; subRow < subStartRow + 3; subRow++) {
		for (let subCol = subStartCol; subCol < subStartCol + 3; subCol++) {
			if(board[subRow][subCol] === digit) return false;
		}
	}
	
	return true;
}

function nextSpot(row, col) {
	return (col < 8) ? [row, ++col] : [++row, 0]
}	

// Do not edit the line below.
exports.solveSudoku = solveSudoku;
