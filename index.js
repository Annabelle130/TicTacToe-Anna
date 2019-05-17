function TTTgame(){

this.player_x = 'x';
this.player_o = 'o';

// player needs to go on odd turns ((move%2)==1)
// need a function to check who the winner is

this.gameOver = false;

this.turn = 1;

var whoseturn = "x"

$ ("#myBtn1").on("click", play_game1)

function play_game1() {
  if (whoseturn === "x"){
    $("#TTT1").append = "x";
    whoseturn = "o"
  } else {
    $("#TTT1").append = "o";
    whoseturn = "x"


  }


}

$("myBtn2").addEventListener("click", play_game2);

function play_game2() {
  $("TTT2").innerHTML = "X";
}

$("myBtn3").addEventListener("click", play_game3);

function play_game3() {
  $("TTT3").innerHTML = "X";
}
$("myBtn4").addEventListener("click", play_game4);

function play_game4() {
  $("TTT4").innerHTML = "X";

}

$("myBtn5").addEventListener("click", play_game5);

function play_game5() {
  $("TTT5").innerHTML = "X";
}

$("myBtn6").addEventListener("click", play_game6);

function play_game6() {
  $("TTT6").innerHTML = "X";
}
$("myBtn7").addEventListener("click", play_game7);

function play_game7() {
  $("TTT7").innerHTML = "X";

}

$("myBtn8").addEventListener("click", play_game8);

function play_game8() {
  $("TTT8").innerHTML = "X";
}

$("myBtn9").addEventListener("click", play_game9);

function play_game9() {
  $("TTT9").innerHTML = "X";
}
}
function winner(){
  if (($("TTT1").innerHTML = "x" && $("TTT2").innerHTML = "x" && $("TTT3").innerHTML = "x") || ($("TTT4").innerHTML = "x" && $("TTT5").innerHTML = "x" && $("TTT6").innerHTML = "x")||($("TTT7").innerHTML = "x" && $("TTT8").innerHTML = "x" && $("TTT9").innerHTML = "x"))||(
$("TTT1").innerHTML = "x" && $("TTT5").innerHTML = "x" && $("TTT9").innerHTML = "x")||
($("TTT1").innerHTML = "x" && $("TTT5").innerHTML = "x" && $("TTT9").innerHTML = "x") ||
($("TTT3").innerHTML = "x" && $("TTT5").innerHTML = "x" && $("TTT7").innerHTML = "x")||(
$("TTT1").innerHTML = "x" && $("TTT4").innerHTML = "x" && $("TTT7").innerHTML = "x")||(
$("TTT2").innerHTML = "x" && $("TTT5").innerHTML = "x" && $("TTT8").innerHTML = "x") ||(
$("TTT3").innerHTML = "x" && $("TTT6").innerHTML = "x" && $("TTT9").innerHTML = "x"){
     $("p").text("Player X Won!");

  }


  }
//create new instance of a game
