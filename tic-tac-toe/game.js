// ---------------
// Logic Functions
// ---------------

var players = ["o", "x"];
var board = [["o", "x", ""],["x", "x", "x"],["oplayer", "o"]];
var winner;
var currentPlayer = players[0];

var horizontalWinCheck = function(winner) {
  players.forEach(function(player) {
    board.forEach(function(tiles) {
      var playerCounter = 0;
      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i] === player) {
          playerCounter += 1;
        }
        if (playerCounter === 3) {
          winner = player;
          return winner;
          console.log(winner + " is the winner!");
        }
      }
    });
  })
};

var verticalWinCheck = function(winner) {
  players.forEach(function(player) {
    if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
      winner = player;
      return winner;
      console.log(winner + " is the winner!");
    } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
      winner = player;
      return winner;
      console.log(winner + " is the winner!");
    } else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
      winner = player;
      return winner;
      console.log(winner + " is the winner!");
    } else {
      console.log("no vertical winner");
    }
  });
};

var diagonalWinCheck = function(winner) {
  players.forEach(function(player) {
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      winner = player;
      return winner;
      console.log(winner + " is the winner!");
    } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      winner = player;
      return winner;
      console.log(winner + " is the winner!");
    } else {
      console.log("no diagonal winner");
    }
  });
};

// Checks if a tile has a value, if not, sets that value to the current player symbol
var tileValueCheck = function() {
  if (tile !== "") {
    console.log("Tile already full! Choose another tile.")
  } else {
    tiles[i] = currentPlayer;
  }
};

// changes current player symbol
var changePlayer = function() {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else if (currentPlayer === players[1]) {
    currentPlayer = players[0];
  }
  console.log("The current player is: " + currentPlayer);
};

var allWinChecks = function() {
  horizontalWinCheck(winner);
  verticalWinCheck(winner);
  diagonalWinCheck(winner);
};

// ----------------------
// Presentation Functions
// ----------------------

window.addEventListener('click', changePlayer);
