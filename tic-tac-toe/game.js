// ---------------
// Logic Functions
// ---------------

var players = ["o", "x"];
var boardArr = [["", "", ""],["", "", ""],["", "", ""]];
var winner;
var currentPlayer = players[0];

var horizontalWinCheck = function() {
  players.forEach(function(player) {
    boardArr.forEach(function(tiles) {
      var playerCounter = 0;
      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i] === player) {
          playerCounter += 1;
        }
        if (playerCounter === 3) {
          winner = player;
          winnerMessage;
          board.removeEventListener('click', ticTacToe);
        }
      }
    });
  })
};

var verticalWinCheck = function() {
  players.forEach(function(player) {
    if (boardArr[0][0] === player && boardArr[1][0] === player && boardArr[2][0] === player) {
      winner = player;
      winnerMessage;
      board.removeEventListener('click', ticTacToe);
    } else if (boardArr[0][1] === player && boardArr[1][1] === player && boardArr[2][1] === player) {
      winner = player;
      winnerMessage;
      board.removeEventListener('click', ticTacToe);
    } else if (boardArr[0][2] === player && boardArr[1][2] === player && boardArr[2][2] === player) {
      winner = player;
      winnerMessage;
      board.removeEventListener('click', ticTacToe);
    } else {
      console.log("no vertical winner");
    }
  });
};

var diagonalWinCheck = function() {
  players.forEach(function(player) {
    if (boardArr[0][0] === player && boardArr[1][1] === player && boardArr[2][2] === player) {
      winner = player;
      console.log(winner + " is the winner!");
      board.removeEventListener('click', ticTacToe);
    } else if (boardArr[0][2] === player && boardArr[1][1] === player && boardArr[2][0] === player) {
      winner = player;
      winnerMessage;
      board.removeEventListener('click', ticTacToe);
    } else {
      console.log("no diagonal winner");
    }
  });
};

// Checks if a tile has a value, if not, sets that value to the current player symbol
var tileValueCheck = function() {
  if (event.target.className !== "") {
    console.log("Tile already full! Choose another tile.")
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
  winnerMessage = winner + " is the winner!";
  whoWon.textContent = winnerMessage;
};

var ticTacToe = function() {
  tileValueCheck();
  setTileValue();
  allWinChecks();
  changePlayer();
};



board.addEventListener('click', ticTacToe);
