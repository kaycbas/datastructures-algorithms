// Hacker Rank problem
// a 2-D grid consistening of some blocked represented at '#' and some unblocked
// represented as '.' cell is given. The starting position of a  pointer is in the top-left corner of the grid 
// it is gauranteerd that the starting position is an unblocked cell.
// Its also guaranteed that the bottom-right cell is unblocked. Each cell of the grid 
// is connected with it's right, left, top and bottom cells. it takes 
// 1 second for a pointer to move form a cell to its adjacent cell. 
// if the pointer can reach the bottom corner of the grid within k-seconds, 
// return the string yes. otherwise, No.

const validPath = (grid, maxDepth) => {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('');    
    }
    return bfs(grid, maxDepth);
}

const bfs = (grid, maxDepth) => {
    let queue = [[0, 0, 0]]; // [row, col, depth]

    while (queue.length > 0) {
      const pos = queue.pop();

      const row = pos[0];
      const col = pos[1];
      const depth = pos[2];
      const char = grid[row][col];

      if (isBottomRight(grid, row, col) && char === '.' && depth <= maxDepth) {
          return 'Yes';
      }

      if (char === '.') {
          grid[row][col] = '#';
          if (isDot(grid, row, col + 1)) queue.unshift([row, col + 1, depth + 1]);
          if (isDot(grid, row, col - 1)) queue.unshift([row, col - 1, depth + 1]);
          if (isDot(grid, row + 1, col)) queue.unshift([row + 1, col, depth + 1]);
          if (isDot(grid, row - 1, col)) queue.unshift([row - 1, col, depth + 1]);
      }
    }
    return 'No'
}

const isDot = (grid, row, col) => {
    if (row < 0 || row >= grid.length) return false;
    if (col < 0 || col >= grid[0].length) return false;
    if (grid[row][col] !== '.') return false;
    return true;
}

const isBottomRight = (grid, row, col) => {
    if (row === grid.length - 1 && col === grid[0].length - 1) return true;
    return false;
}

grid = [
    "..##", 
    "#.##", 
    "#..."
]

console.log(validPath(grid, 5));
