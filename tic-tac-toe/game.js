var players = ["o", "x"];
var board = [["o", "x", ""],["x", "o", "x"],["o", "x", "o"]];
var winner = false;
var playerWin = ["ooo", "xxx"];


var horizontalWinCheck = function() {
  players.forEach(function(player) {
    board.forEach(function(tiles) {
      var playerCounter = 0;
      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i] === player) {
          playerCounter += 1;
        }
        if (playerCounter === 3) {
          console.log(player + " is the winner!");
          winner = true;
        } else {
          winner = false;
        }
      }
    });
  })
};

var verticalWinCheck = function() {
  playerWin.forEach(function(player) {
    if (board[0][0] + board[1][0] + board[2][0] === player) {
      console.log(player + " is the winner!");
      winner = true;
    } else if (board[0][1] + board[1][1] + board[2][1] === player) {
      console.log(player + " is the winner!");
      winner = true;
    } else if (board[0][2] + board[1][2] + board[2][2] === player) {
      console.log(player + " is the winner!");
      winner = true;
    } else {
      console.log("no vertical winner");
      winner = false;
    }
  });
};

var diagonalWinCheck = function(player) {
  playerWin.forEach(function(player) {
    if (board[0][0] + board[1][1] + board[2][2] === player) {
      console.log(player + " is the winner!");
      winner = true;
    } else if (board[0][2] + board[1][1] + board[2][0] === player) {
      console.log(player + " is the winner!");
      winner = true;
    } else {
      console.log("no diagonal winner");
      winner = false;
    }
  });
};

var tileValueCheck = function() {
  //if tile has a value, nothing should happen, or a message saying to choose another square
  //if tile has no value, run set value function.
}

var allWinChecks = function(player1, player2) {
}
