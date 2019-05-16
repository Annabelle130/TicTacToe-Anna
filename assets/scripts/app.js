'use strict'

const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#examples-create').on('submit', exampleEvents.onCreate)
  $('#examples-index').on('submit', exampleEvents.onIndex)
  $('#examples-show').on('submit', exampleEvents.onShow)
  $('#examples-destroy').on('submit', exampleEvents.onDestroy)
  $('#examples-update').on('submit', exampleEvents.onUpdate)
})
