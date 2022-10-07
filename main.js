   
const moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0


function generateMove() {
  let roll = Math.floor(Math.random() * (3 - 0));
  return moves[roll];
}  

function compareMoves() {
    let playerMove = window. prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerMove = generateMove();
    let win;
    if (playerMove == computerMove) {
        console.log("It's a tie");
    } else if ((playerMove == "rock" && computerMove == "paper")
        || (playerMove == "scissors" && computerMove == "rock")) {
        console.log("You lose");
        computerScore ++;
    } else {
        console.log("You win");
        playerScore ++;
    }
}

function playRound () {

    while (playerScore < 5 && computerScore < 5) {
        compareMoves();
        console.log(`Player score = ${playerScore} - Computer score = ${computerScore}`);
    }
    if (playerScore >= 5) {
        console.log("YOU WIN THE GAME!!! Reload to play again.");
    }   else {
        console.log("YOU HAVE LOST THE GAME. RELOAD TO TRY AGAIN.")
    }
}

playRound();
