'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  // mount all of our event handlers to the correct DOM elements when the page
  // has finished loading
  $('#games-index').on('click', gameEvents.onGetGames)
  $('#games-show').on('submit', gameEvents.onGetGame)
  $('#games-delete').on('submit', gameEvents.onDeleteGame)
  $('#games-update').on('submit', gameEvents.onUpdateGame)
  $('#games-create').on('submit', gameEvents.onCreateGame)
})

let whoseturn = 'x'
const gameArray = ['', '', '', '', '', '', '', '', '']

const checkForWinner = function () {
  if (gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') {
    console.log('X Won!')
  } else if (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') {
    console.log('X Won!')
  } else if (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') {
    console.log('X Won!')
  } else if (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') {
    console.log('X Won!')
  } else if (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') {
    console.log('X Won!')
  } else if (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') {
    console.log('X Won!')
  } else if (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x') {
    console.log('X Won!')
  } else if (gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') {
    console.log('X Won!')
  } else if (gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x') {
    console.log('X Won!')
  } else if (gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') {
    console.log('O Won!')
  } else if (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') {
    console.log('O Won!')
  } else if (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') {
    console.log('O Won!')
  } else if (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') {
    console.log('O Won!')
  } else if (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') {
    console.log('O Won!')
  } else if (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') {
    console.log('O Won!')
  } else if (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') {
    console.log('O Won!')
  } else if (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o') {
    console.log('O Won!')
  }
}

function playGame () {
  if (whoseturn === 'x') {
    $(event.target).text('x')
    gameArray[$(event.target).data('index')] = 'x'
    whoseturn = 'o'
  } else {
    $(event.target).text('o')
    gameArray[$(event.target).data('index')] = 'o'
    whoseturn = 'x'
  }
  checkForWinner()
}

$('.cell').on('click', playGame)

// $("myBtn2").on("click", play_game2);
//
// function play_game2() {
//   $("TTT2").append("X");
// }
//
// $("myBtn3").on("click", play_game3);
//
// function play_game3() {
//   $("TTT3").append("X");
// }
// $("myBtn4").on("click", play_game4);
//
// function play_game4() {
//   $("TTT4").append("X");
//
// }
//
// $("myBtn5").on("click", play_game5);
//
// function play_game5() {
//   $("TTT5").append("X");
// }
//
// $("myBtn6").on("click", play_game6);
//
// function play_game6() {
//   $("TTT6").append("X");
// }
// $("myBtn7").on("click", play_game7);
//
// function play_game7() {
//   $("TTT7").append("X");
//
// }
//
// $("myBtn8").on("click", play_game8);
//
// function play_game8() {
//   $("TTT8").append("X");
// }
//
// $("myBtn9").on("click", play_game9);
//
// function play_game9() {
//   $("TTT9").append("X");
// }

// function winner() {
//   if ((($("#TTT1").text() === "x" && $("TTT2").text = "x" && $("TTT3").text = "x") ||
//   ($("TTT4").text = "x" && $("TTT5").text = "x" && $("TTT6").text = "x") ||
//   ($("TTT7").text = "x" && $("TTT8").text = "x" && $("TTT9").text = "x")) ||
//   ($("TTT1").text = "x" && $("TTT5").text = "x" && $("TTT9").text = "x") ||
//     ($("TTT1").text = "x" && $("TTT5").text = "x" && $("TTT9").text = "x") ||
//     ($("TTT3").text = "x" && $("TTT5").text = "x" && $("TTT7").text = "x") ||
//     ($("TTT1").text = "x" && $("TTT4").text = "x" && $("TTT7").text = "x") ||
//     ($("TTT2").text = "x" && $("TTT5").text = "x" && $("TTT8").text = "x") ||
//     ($("TTT3").text = "x" && $("TTT6").text = "x" && $("TTT9").text = "x"))){
//       $("p").text("Player X Won!")
//
//     }
//   }
// })
