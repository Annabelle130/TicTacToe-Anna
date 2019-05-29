'use strict'

const config = require('./../config')
const store = require('../store')

const create = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}
const updateGame = function (boardIndex, cellValue, boolean) {
  // console.log('updateGame')
  console.log('store.game: ', store.game)
  console.log('updating game with user token ', store.user.token)
  console.log(store.user)
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
      }
    },
    headers: {
      Authorization: 'Token  token=' + store.user.token
    }
  })
}
// gameOver()
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

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = (id) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  updateGame,
  create,
  getGames,
  show,
  index
}
