'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign up failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#game-board').show()
  $('#sign-up').hide()
  $('#create-game-message').html('Press Start the Game!')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign in failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
