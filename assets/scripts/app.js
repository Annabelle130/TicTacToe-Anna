'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameLogic = require('./game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // $('#sign-in').submit(function (e) {
  //   $('#sign-up').hide()
  // })

  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#games-update').on('submit', gameEvents.onUpdateGame)
  $('#game-create').on('submit', gameEvents.onCreateGame)
  // $('#show-all-games').on('click', gameEvents.onGetGames)
  $('.cell').on('click', gameLogic.playGame)
  $('#game-update').on('submit', gameEvents.onUpdateGame)
  $('#get-games').on('click', gameEvents.onGetGames)
})
