// Tic-Tac-Toe Game Logic
class TicTacToe {
  constructor() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.gameActive = true;
    this.scores = { X: 0, O: 0 };
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    this.initializeGame();
  }

  initializeGame() {
    this.setupEventListeners();
    this.updateStatus();
    this.updateScoreDisplay();
  }

  setupEventListeners() {
    // Cell click events
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.handleCellClick(index);
      });
    });

    // Button events
    document.getElementById("reset-btn").addEventListener("click", () => {
      this.resetGame();
    });

    document.getElementById("new-game-btn").addEventListener("click", () => {
      this.newGame();
    });
  }

  handleCellClick(index) {
    if (!this.gameActive || this.board[index] !== "") {
      return;
    }

    // Make the move
    this.board[index] = this.currentPlayer;
    this.updateCell(index);

    // Check for win or draw
    if (this.checkWin()) {
      this.handleWin();
    } else if (this.checkDraw()) {
      this.handleDraw();
    } else {
      this.switchPlayer();
    }
  }

  updateCell(index) {
    const cell = document.querySelector(`[data-index="${index}"]`);
    cell.textContent = this.currentPlayer;
    cell.classList.add(this.currentPlayer.toLowerCase());
  }

  checkWin() {
    return this.winningCombinations.some((combination) => {
      return combination.every((index) => {
        return this.board[index] === this.currentPlayer;
      });
    });
  }

  checkDraw() {
    return this.board.every((cell) => cell !== "");
  }

  handleWin() {
    this.gameActive = false;
    this.scores[this.currentPlayer]++;
    this.updateScoreDisplay();
    this.highlightWinningCells();
    this.updateStatus(`Player ${this.currentPlayer} wins!`);
  }

  handleDraw() {
    this.gameActive = false;
    this.updateStatus("It's a draw!");
  }

  highlightWinningCells() {
    const winningCombination = this.winningCombinations.find((combination) => {
      return combination.every((index) => {
        return this.board[index] === this.currentPlayer;
      });
    });

    if (winningCombination) {
      winningCombination.forEach((index) => {
        const cell = document.querySelector(`[data-index="${index}"]`);
        cell.classList.add("winning");
      });
    }
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.updateStatus();
    this.updateCurrentPlayerIndicator();
  }

  updateStatus(message = null) {
    const statusElement = document.getElementById("status");
    if (message) {
      statusElement.textContent = message;
    } else {
      statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }
  }

  updateScoreDisplay() {
    document.getElementById("score-x").textContent = this.scores.X;
    document.getElementById("score-o").textContent = this.scores.O;
  }

  updateCurrentPlayerIndicator() {
    const playerX = document.getElementById("player-x");
    const playerO = document.getElementById("player-o");

    if (this.currentPlayer === "X") {
      playerX.classList.add("current-player");
      playerO.classList.remove("current-player");
    } else {
      playerO.classList.add("current-player");
      playerX.classList.remove("current-player");
    }
  }

  resetGame() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.gameActive = true;

    // Clear all cells
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o", "winning");
    });

    this.updateStatus();
    this.updateCurrentPlayerIndicator();
  }

  newGame() {
    this.scores = { X: 0, O: 0 };
    this.updateScoreDisplay();
    this.resetGame();
  }
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new TicTacToe();
});
