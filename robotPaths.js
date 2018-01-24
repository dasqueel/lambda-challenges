// make a board of n X n
// the board is a 2d array

const makeBoard = n => {
  const row = new Array(n).fill(false);
  // let board = new Array(n).fill(row);
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill(false));
  }

  board.toggle = (rowIdx, colIdx) => {
    board[rowIdx][colIdx] = !board[rowIdx][colIdx];
  };
  board.hasBeenVisited = (rowIdx, colIdx) => {
    return board[rowIdx][colIdx];
  };

  // console.log(board)
  return board;
}

function robotPaths(n) {
  let pathCounter = 0;
  const board = makeBoard(n);

  // recursive function to traverse board (matrix)
  const traversePath = (rowIdx, colIdx) => {
    // check if you reached end point (bottom right of board)
    if (rowIdx === n - 1 && colIdx === n - 1) {
      pathCounter++;
      return;
    }
    // if reached out of bounds, dont return anything
    if (rowIdx < 0 || rowIdx >= n || colIdx < 0 || colIdx >= n) return;
    // if reached an already visited spot, return nothing
    if (board.hasBeenVisited(rowIdx, colIdx)) return;
   // mark the spot reached to true (to visited)
    else {
      board.toggle(rowIdx, colIdx);
      // move right
      traversePath(rowIdx + 1, colIdx);
      // move left
      traversePath(rowIdx - 1, colIdx);
      // move up
      traversePath(rowIdx, colIdx + 1);
      // move down
      traversePath(rowIdx, colIdx - 1);
      board.toggle(rowIdx, colIdx);
    }
  };
  // start at upper left corner of board
  traversePath(0,0);

  // recursed to all paths, and return how many got to the end
  return pathCounter;
}

console.log(robotPaths(5));