'use strict'

const config = require('./../config')

const index = function () {
  // make GET request to /games
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
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
    data: formData
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
