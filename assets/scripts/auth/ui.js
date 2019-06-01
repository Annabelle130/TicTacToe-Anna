'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#create-game-message').text('Signed up successfully!')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('success')
  $('#create-game-message').html('Sign Up Successful!')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#create-game-message').text('Sign up failed :(((')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#create-game-message').text('Signed in successfully!')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('success')
  $('#game-board').removeClass('hide')
  // $('#game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#game-create').show()
  $('#create-game-message').html('Press Start the Game!')
  $('form').trigger('reset')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#create-game-message').text('Sign in failed :(((')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#create-game-message').html('Password Changed!')
  $('#change-password').hide()
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#create-game-message').text('Password change failed!')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#create-game-message').text('Signed out successfully!')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('success')
  $('form').trigger('reset')
}

const onSignOutFailure = () => {
  $('#create-game-message').text('Sign out failed :(((')
  $('#create-game-message').removeClass()
  $('#create-game-message').addClass('failure')
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
