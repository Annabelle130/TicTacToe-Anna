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

  let whoseturn = 'x'

  function play_game() {
    if (whoseturn === 'x') {
      $(event.target).text('x')
      whoseturn = 'o'
    } else {
      $(event.target).append('o')
      whoseturn = 'x'
    }
  }

  $('.cell').on('click', play_game)

  // $("myBtn2").on("click", play_game2);
  //
  // function play_game2() {
  //   $("TTT2").append("X");
  // }
  //
  // $("myBtn3").on("click", play_game3);
  //
  // function play_game3() {
  //   $("TTT3").append("X");
  // }
  // $("myBtn4").on("click", play_game4);
  //
  // function play_game4() {
  //   $("TTT4").append("X");
  //
  // }
  //
  // $("myBtn5").on("click", play_game5);
  //
  // function play_game5() {
  //   $("TTT5").append("X");
  // }
  //
  // $("myBtn6").on("click", play_game6);
  //
  // function play_game6() {
  //   $("TTT6").append("X");
  // }
  // $("myBtn7").on("click", play_game7);
  //
  // function play_game7() {
  //   $("TTT7").append("X");
  //
  // }
  //
  // $("myBtn8").on("click", play_game8);
  //
  // function play_game8() {
  //   $("TTT8").append("X");
  // }
  //
  // $("myBtn9").on("click", play_game9);
  //
  // function play_game9() {
  //   $("TTT9").append("X");
  // }


// function winner() {
//   if ((($("#TTT1").text() === "x" && $("TTT2").text = "x" && $("TTT3").text = "x") ||
//   ($("TTT4").text = "x" && $("TTT5").text = "x" && $("TTT6").text = "x") ||
//   ($("TTT7").text = "x" && $("TTT8").text = "x" && $("TTT9").text = "x")) ||
//   ($("TTT1").text = "x" && $("TTT5").text = "x" && $("TTT9").text = "x") ||
//     ($("TTT1").text = "x" && $("TTT5").text = "x" && $("TTT9").text = "x") ||
//     ($("TTT3").text = "x" && $("TTT5").text = "x" && $("TTT7").text = "x") ||
//     ($("TTT1").text = "x" && $("TTT4").text = "x" && $("TTT7").text = "x") ||
//     ($("TTT2").text = "x" && $("TTT5").text = "x" && $("TTT8").text = "x") ||
//     ($("TTT3").text = "x" && $("TTT6").text = "x" && $("TTT9").text = "x"))){
//       $("p").text("Player X Won!")
//
//     }
//   }
})
