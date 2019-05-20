'use strict'

const config = require('./../config')
const store = require('../store')

const getGames = function (formData) {
  // make GET request to /games
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

const destroy = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.games.id,
    method: 'DELETE'
  })
}

const update = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.games.id,
    method: 'PATCH',
    data: formData
  })
}

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getGames,
  show,
  destroy,
  update,
  create
}
