'use strict'
const store = require('./store')
const gameAPI = require('./api')

let whoseturn = 'x'
const checkForWinner = function () {
  const gameArray = store.game.cells
  const checkForDraw = function (cell) {
    return cell !== ''
  }
  if ((gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
    (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
    (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') ||
    (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') ||
    (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
    (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
    (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x') ||
    (gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') ||
    (gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x')) {
    store.game.over = true
    $('#game-status').html('Player x won!')
  } else if (
    (gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
    (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
    (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') ||
    (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
    (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
    (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') ||
    (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    store.game.over = true
    $('#game-status').html('Player x won!')
  } else if (store.game.cells.every(checkForDraw)) {
    store.game.over = true
    $('#game-status').html('Player won!')
  }
}
const playGame = function (event) {
  event.preventDefault()
  const boardIndex = $(event.target).data('index')
  console.log(boardIndex, store.game.cells[boardIndex], store.game.over)
  if ((store.game.cells[boardIndex] === '') && store.game.over === false) {
    if (whoseturn === 'x') {
      $(event.target).text('x')
      store.game.cells[boardIndex] = 'x'
      whoseturn = 'o'
    } else {
      $(event.target).text('o')
      store.game.cells[boardIndex] = 'o'
      whoseturn = 'x'
    }
    checkForWinner()
    gameAPI.updateGame(boardIndex, store.game.cells[boardIndex], store.game.over)
  }
  // objGame.game.
  // cell.index = 0
  // objGame.game.cell.value = 'x'
  // $('.cell').on('click', playGame)
  // if (whoseturn !== 0) {
  //   $('#diff-cell').text('Choose a different cell')
}
module.exports = {
  playGame
}
