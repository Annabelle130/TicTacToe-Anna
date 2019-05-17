function TTTgame(){

this.player_x = 'x';
this.player_o = 'o';

// player needs to go on odd turns ((move%2)==1)
// need a function to check who the winner is

this.gameOver = false;

this.turn = 1;

var whoseturn = "x"

document.getElementById("myBtn1").addEventListener("click", play_game1);

function play_game1() {
  if (whoseturn === "x"){
    document.getElementById("TTT1").innerHTML = "x";
    whoseturn = "o"
  } else {
    document.getElementById("TTT1").innerHTML = "o";
    whoseturn = "x"


  }


}

document.getElementById("myBtn2").addEventListener("click", play_game2);

function play_game2() {
  document.getElementById("TTT2").innerHTML = "X";
}

document.getElementById("myBtn3").addEventListener("click", play_game3);

function play_game3() {
  document.getElementById("TTT3").innerHTML = "X";
}
document.getElementById("myBtn4").addEventListener("click", play_game4);

function play_game4() {
  document.getElementById("TTT4").innerHTML = "X";

}

document.getElementById("myBtn5").addEventListener("click", play_game5);

function play_game5() {
  document.getElementById("TTT5").innerHTML = "X";
}

document.getElementById("myBtn6").addEventListener("click", play_game6);

function play_game6() {
  document.getElementById("TTT6").innerHTML = "X";
}
document.getElementById("myBtn7").addEventListener("click", play_game7);

function play_game7() {
  document.getElementById("TTT7").innerHTML = "X";

}

document.getElementById("myBtn8").addEventListener("click", play_game8);

function play_game8() {
  document.getElementById("TTT8").innerHTML = "X";
}

document.getElementById("myBtn9").addEventListener("click", play_game9);

function play_game9() {
  document.getElementById("TTT9").innerHTML = "X";
}
}
function winner(){
  if ((document.getElementById("TTT1").innerHTML = "x" && document.getElementById("TTT2").innerHTML = "x" && document.getElementById("TTT3").innerHTML = "x") || (document.getElementById("TTT4").innerHTML = "x" && document.getElementById("TTT5").innerHTML = "x" && document.getElementById("TTT6").innerHTML = "x")||(document.getElementById("TTT7").innerHTML = "x" && document.getElementById("TTT8").innerHTML = "x" && document.getElementById("TTT9").innerHTML = "x"))||(
document.getElementById("TTT1").innerHTML = "x" && document.getElementById("TTT5").innerHTML = "x" && document.getElementById("TTT9").innerHTML = "x")||
(document.getElementById("TTT1").innerHTML = "x" && document.getElementById("TTT5").innerHTML = "x" && document.getElementById("TTT9").innerHTML = "x") ||
(document.getElementById("TTT3").innerHTML = "x" && document.getElementById("TTT5").innerHTML = "x" && document.getElementById("TTT7").innerHTML = "x")||(
document.getElementById("TTT1").innerHTML = "x" && document.getElementById("TTT4").innerHTML = "x" && document.getElementById("TTT7").innerHTML = "x")||(
document.getElementById("TTT2").innerHTML = "x" && document.getElementById("TTT5").innerHTML = "x" && document.getElementById("TTT8").innerHTML = "x") ||(
document.getElementById("TTT3").innerHTML = "x" && document.getElementById("TTT6").innerHTML = "x" && document.getElementById("TTT9").innerHTML = "x"){
     $("p").text("Player X Won!");

  }


  }
//create new instance of a game
