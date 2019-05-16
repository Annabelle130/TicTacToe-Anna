'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')
/* THIS PART CREATES THE GAME */
/* create the new game */
/* THIS PART CREATES THE GAME */
/* create the new game */
freshGame();

/* display the player message */
updateDisplay();

/* display the Board */
updateBoard();



/* FUNCTIONS LIBRARY */

/* STARTERS */
/* initialize game */
function freshGame() {
  var
    player = "none"
    state = 0
    Board = ["blank","blank","blank","blank","blank","blank",
      "blank","blank","blank"]
  ;
}

/* display the turn label and new game button */
function updateDisplay () {
  /* set the display message */
  switch (state) {
  case 0:ggff
    /* choose who goes first */
    player = choosePlayer();

    /* set the display message */
    document.getElementById("gameState").innerHTML =
      "New Game! You go first, Player " + player;

    /* update the state on the 1st turn only */
    state= 1;
    break;

  case 1:
    document.getElementById("gameState").innerHTML =
      "Play continues! It is your turn, Player " + player;
    break;

  case 2:
    document.getElementById("gameState").innerHTML =
      "VICTORY! You win, Player " + player;
    displayNewGame();
    updateBoard();
    break;

  case 3:
    document.getElementById("gameState").innerHTML =
      "DRAW. Click NEW GAME to start over.";
    displayNewGame();
    break;

  /* You should never see this! Buuuut just in case. */
  default:
    document.getElementById("gameState").innerHTML =
      "Something went wrong! Click NEW GAME to start over.";
    displayNewGame();
    break;
  }
}

/* update the Board */
function updateBoard() {
  for (i = 0; i < Board.length; i++) {
    var BoardValue = Board[i];
    switch (BoardValue) {
      case "X":
      document.getElementById("cell" + i).innerHTML =
        "<span style='color: blue;'>X</span>";
      break;

      case "O":
      document.getElementById("cell" + i).innerHTML =
        "<span style='color: green;'>O</span>";
      break;

      case "victory":
      document.getElementById("cell" + i).innerHTML =
        "<span style='color: red;'>You win!</span>";
      break;

      default:
        document.getElementById("cell" + i).innerHTML =
        "<button onclick='advanceTurn(" + i + ")'>Click</button>";
    }
  }
}

/* ACTUALLY RUN THE GAME */
function advanceTurn(cell) {
  /* assign the cell to the player who clicked it */
  Board[cell] = player;

  /* check for win, draw, or continue */
  checkstate();

  /* if the game continues, it's the next player's turn */
  if (state == 1) {
    if (player == "X") {
      player = "O"
    } else if (player == "O") {
      player = "X"
    };
  }

  /* redraw the page */
  updateDisplay();
  updateBoard();
}

/* check the win state and update labels */
function checkstate () {
  if (
    /* check rows */
    checkWinner(Board[0],Board[1],Board[2]) ||
    checkWinner(Board[3],Board[4],Board[5]) ||
    checkWinner(Board[6],Board[7],Board[8]) ||
    /* check columns */
    checkWinner(Board[0],Board[3],Board[6]) ||
    checkWinner(Board[1],Board[4],Board[7]) ||
    checkWinner(Board[2],Board[5],Board[8]) ||
    /* check diagonals */
    checkWinner(Board[0],Board[4],Board[8]) ||
    checkWinner(Board[2],Board[4],Board[6])
  )
    {
      /* There was a winner! */
      state = 2;
      clearCells();
  } else {
    /* make sure there are blank spaces */
    var blanksLeft = false;
    for (i = 0; i < Board.length; i++) {
      if (Board[i] == "blank") {
        blanksLeft = true;
      }
    }

    /* No blank spaces! Game is a draw. */
    if (blanksLeft == false) {
      state = 3;
    }
  }
}

/* check if the selected cells match */
function checkWinner (x,y,z) {
  var result = false;
  if (x == y && x == z && x != "blank") {
    result = true;
  }
  return result;
}


/* SUPPORT FUNCTIONS */
/* randomly chooses who will go first */
function choosePlayer() {
  min = 1;
  max = 2;
  coinFlip = Math.floor(Math.random() * (max - min + 1) ) + min;
  switch (coinFlip) {
    case 1:
      newPlayer = "X";
      break;
    case 2:
      newPlayer = "O";
      break;
    default:
      newPlayer = "X";
      break;
  }
  return newPlayer;
}

/* clear the unclicked cells when there is a winner */
function clearCells() {
  for (i = 0; i < Board.length; i++) {
    if (Board[i] == "blank") {
      Board[i] = "victory";
    }
  }
}

/* display NEW GAME button */
function displayNewGame() {
  document.getElementById("newGame").innerHTML =
    "<button onclick='refreshGame()'>NEW GAME</button>"
}

/* refresh the game */
function refreshGame () {
  freshGame();
  window.location='tictactoe.html';
}
