'use strict'

const config = require('./../config')
const store = require('../store')
const app = require('../app')

// const objGame = {
//   'game': {
//     'cell': {
//         'index': 0,
//         'value': 'x'
//       },
//     'over': false
//   }
// }

const getGames = function (formData) {
  // make GET request to  /games
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.games.id,
    method: 'GET'
  })
}

const gameOver = function () {
  if (app.gameArray.length === 9) {
    console.log('Game Over!')
  }
}
const updateGame = function (boardIndex, cellValue, boolean) {
  // console.log('updateGame')
  console.log('store.game: ', store.game)
  const id = store.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': boardIndex,
          'value': cellValue
        },
        'over': boolean
      },
      headers: {
        Authorization: 'Token  token=' + store.user.token
      }

    }

  })
}
gameOver()

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

module.exports = {
  getGames,
  show,
  updateGame,
  create
}
