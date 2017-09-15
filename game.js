// ---------------
// Logic Functions
// ---------------

var players = ["Defence", "Attack"];
var boardArr = [["", "", ""],["", "", ""],["", "", ""]];
var currentPlayer = players[1];

var horizontalWinCheck = function() {
  boardArr.forEach(function(tiles) {
    var counter = 0;
    for (var i = 0; i < tiles.length; i++) {
      if (tiles[i] === currentPlayer) {
        counter += 1;
      }
      if (counter === 3) {
        displayWinner();
        gameOver();
      }
    }
  });
};

var verticalWinCheck = function() {
  if (boardArr[0][0] === currentPlayer && boardArr[1][0] === currentPlayer && boardArr[2][0] === currentPlayer) {
    displayWinner();
    gameOver();
  } else if (boardArr[0][1] === currentPlayer && boardArr[1][1] === currentPlayer && boardArr[2][1] === currentPlayer) {
    displayWinner();
    gameOver();
  } else if (boardArr[0][2] === currentPlayer && boardArr[1][2] === currentPlayer && boardArr[2][2] === currentPlayer) {
    displayWinner();
    gameOver();
  }
};

var diagonalWinCheck = function() {
  players.forEach(function(player) {
    if (boardArr[0][0] === currentPlayer && boardArr[1][1] === currentPlayer && boardArr[2][2] === currentPlayer) {
      displayWinner();
      gameOver();
    } else if (boardArr[0][2] === currentPlayer && boardArr[1][1] === currentPlayer && boardArr[2][0] === currentPlayer) {
      displayWinner();
      gameOver();
    }
  });
};

// Checks if a tile has a value, if not, sets that value to the current player symbol
var tileValueCheck = function() {
  if (event.target.className !== "") {
  } else {
    event.target.className = currentPlayer;
  }
};

// changes current player symbol
var changePlayer = function() {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else if (currentPlayer === players[1]) {
    currentPlayer = players[0];
  }
};

var allWinChecks = function() {
  horizontalWinCheck();
  verticalWinCheck();
  diagonalWinCheck();
};

// ----------------------
// Presentation Functions
// ----------------------

// window.addEventListener('click', changePlayer);

var board = document.querySelector('#board');
var whoWon = document.querySelector('.who-won');
var resetBtn = document.querySelector('.reset-btn');


var setTileValue = function() {
  var counter = 0;
  boardArr.forEach(function(tiles) {
    for (var i = 0; i < tiles.length; i++) {
      tiles[i] = board.children[counter].className;
      counter +=1;
    }
  });
};

var displayWinner = function() {
    whoWon.textContent = currentPlayer + " Wins!";
};

var gameOver = function() {
  board.removeEventListener('click', ticTacToe);
};

resetBtn.addEventListener('click' ,function() {
  for (var i = 0; i < board.children.length; i++) {
    board.children[i].className = "";
  }
  boardArr = [["", "", ""],["", "", ""],["", "", ""]];
  whoWon.textContent = "";
  board.addEventListener('click', ticTacToe);
});

var tieCheck = function() {
  if (boardArr[0].indexOf("") === -1 && boardArr[1].indexOf("") === -1 && boardArr[2].indexOf("") === -1 && allWinChecks() === undefined) {
    whoWon.textContent = "It's a tie!";
  }
};

var ticTacToe = function() {
  tileValueCheck();
  setTileValue();
  allWinChecks();
  tieCheck();
  changePlayer();
};

board.addEventListener('click', ticTacToe);
