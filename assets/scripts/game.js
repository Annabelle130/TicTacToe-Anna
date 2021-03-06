'use strict'
const store = require('./store')
const api = require('./game/api')
const ui = require('./game/ui')

// let whoseturn = 'x'
// store.game.whoseturn = 'x'
const checkForWinner = function () {
  const gameArray = store.game.cells
  const checkForDraw = function (cell) {
    return cell !== ''
  }
  if ((gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
    (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
    (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') ||
    (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
    (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x') ||
    (gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') ||
    (gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x')) {
    store.game.over = true
    $('#create-game-message').html('Player x won! Play again?')
  } else if (
    (gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
    (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
    (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') ||
    (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
    (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
    (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') ||
    (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
    (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    store.game.over = true
    $('#create-game-message').html('Player o won! Play again?')
  } else if (store.game.cells.every(checkForDraw)) {
    store.game.over = true
    $('#create-game-message').html('It\'s a draw! Play again?')
    // game-status
  }
}

const playGame = function (event) {
  event.preventDefault()
  const boardIndex = $(event.target).data('index')
  // console.log(boardIndex, store.game.cells[boardIndex], store.game.over)
  if ((store.game.cells[boardIndex] === '') && store.game.over === false) {
    if (store.game.whoseturn === 'x') {
      $(event.target).text('x')
      store.game.cells[boardIndex] = 'x'
      store.game.whoseturn = 'o'
    } else {
      $(event.target).text('o')
      store.game.cells[boardIndex] = 'o'
      store.game.whoseturn = 'x'
    }
    checkForWinner()
    // console.log(ui)
    // console.log(api)
    api.updateGame(boardIndex, store.game.cells[boardIndex], store.game.over)
    //   .then(function () { console.log('hello?') })
    //
    // console.log('howdy')
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  }
}

// const resetGameState = function () {
//   whoseturn = 'x'
// }
// objGame.game.
// cell.index = 0
// objGame.game.cell.value = 'x'
// $('.cell').on('click', playGame)
// if (whoseturn !== 0) {
//   $('#diff-cell').text('Choose a different cell')

module.exports = {
  playGame
  // resetGameState
}
