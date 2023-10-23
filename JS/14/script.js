// Tic-Tac-Toe game
const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X";
let gameOver = false;

function printBoard() {
  console.clear();
  console.log(board[0] + " | " + board[1] + " | " + board[2]);
  console.log("---------");
  console.log(board[3] + " | " + board[4] + " | " + board[5]);
  console.log("---------");
  console.log(board[6] + " | " + board[7] + " | " + board[8]);
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (const [a, b, c] of winCombinations) {
    if (board[a] !== " " && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !board.includes(" ");
}

function playGame() {
  printBoard();
  console.log(`Player ${currentPlayer}'s turn. Enter your move (1-9):`);

  process.stdin.once("data", (input) => {
    const position = parseInt(input, 10);

    if (isNaN(position) || position < 1 || position > 9 || board[position - 1] !== " ") {
      console.log("Invalid move. Try again.");
      playGame();
      return;
    }

    board[position - 1] = currentPlayer;
    if (checkWin()) {
      printBoard();
      console.log(`Player ${currentPlayer} wins!`);
      gameOver = true;
    } else if (checkDraw()) {
      printBoard();
      console.log("It's a draw!");
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (!gameOver) {
        playGame();
      }
    }
  });
}

playGame();
