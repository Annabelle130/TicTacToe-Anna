'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const playGame = require('../game.js')

const onGetGames = function (event) {
  // make API call to get all of the games

  // const formData = getFormFields(event.target)
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onError)
}

// const onGetGame = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//   const formData = getFormFields(event.target)
//
//   api.show(formData)
//
//     // if the API call is successful then pass the data to the onShowSuccess
//     // function
//     .then(ui.onShowSuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
//
// const onDeleteGame = function (event) {
//   event.preventDefault()
//
//   const formData = getFormFields(event.target)
//
//   // make API call for deleting one book with the data we grabbed from the form
//   api.destroy(formData)
//
//     // if the API call is successful then invoke the onDetroySuccess function
//     .then(ui.onDestroySuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }

const onUpdateGame = function (gameArray, boardIndex, cellValue) {
  // prevent default submit action to stop the page from refreshing
  console.log('The game has been updated!')
  // event.preventDefault()
  store.game.cells = gameArray
  console.log(store.game)
  playGame()
  // api.updateGame(boardIndex, cellValue)
  // .then(ui.onUpdateSuccess(event.target))
  //   .catch(ui.onError
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('Function is running!')
  $('#game-board').show()
  $('.cell').html('')

  // create a javascript object from the form where the user entered the GAME
  // information
  // make API call to create one GAME with the data we grabbed from the form
  api.create()

    // if the API call is successful then invoke the onCreateSuccess function
    .then(ui.onCreateSuccess)

    // if the API call fails then run our onError function
    .catch(ui.onError)
}
// const onUpdateGame = function (gameArray, boardIndex, cellValue) {
//   // prevent default submit action to stop the page from refreshing
//   console.log('The game has been updated!')
//   // event.preventDefault()
//   store.game.cells = gameArray
//   console.log(store.game)
module.exports = {
  onGetGames,
  onUpdateGame,
  onCreateGame
}
