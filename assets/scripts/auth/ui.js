'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create-game-message').html('Sign Up Successful!')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign up failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#game-board').removeClass('hide')
  // $('#game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game-message').html('Press Start the Game!')
  $('form').trigger('reset')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign in failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#create-game-message').html('Password Changed!')
  $('#change-password').hide()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#create-game-message').text('Password change failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed :(((')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
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
