let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3) + 1;
  if (choices === 1) {
    choices = "Rock";
  } else if (choices === 2) {
    choices = "Paper";
  } else {
    choices = "Scissors";
  }
  return choices;
}

function getHumanChoice() {
    let rpsChoice = prompt("Rock, Paper or Scissors");
    let rpsLowerCase = rpsChoice.toLowerCase();
    if(rpsLowerCase !== 'rock' && rpsLowerCase !== 'paper' && rpsLowerCase !== 'scissors'){
        return prompt("Please enter either Rock, Paper or Scissors");
    } else {
        return rpsChoice;
    }
}

// getHumanChoice()

function playRound(humanChoice, computerChoice) {
  let humanLowerCase = humanChoice.toLowerCase();
  let computerLowerCase = computerChoice.toLowerCase();
  // console.log(humanLowerCase, computerChoice);
  if (humanLowerCase === "rock" && computerLowerCase === "scissors") {
    console.log("Player win!", humanLowerCase, "beats", computerLowerCase);
    humanScore++;
    console.log("Human's score", humanScore);
  } else if (humanLowerCase === "paper" && computerLowerCase === "Rock") {
    console.log("Player win!", humanLowerCase, "beats", computerLowerCase);
    humanScore++;
    console.log("Human's score", humanScore);
  } else if (humanLowerCase === "scissors" && computerLowerCase === "Paper") {
    console.log("Player win!", humanLowerCase, "beats", computerLowerCase);
    humanScore++;
    console.log("Human's score",humanScore);
  } else if (humanLowerCase === computerLowerCase){
    console.log("It's a tie!")
  } else {
    console.log("Computer win!", computerLowerCase, "beats", humanLowerCase);
    computerScore++
    console.log("Computer's score", computerScore);
  }
}

// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
  for (count = 1; count <= 5; count++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("Player WINS!!");
  } else if (humanScore === computerScore){
    console.log("TIE!!!");
  } else {
    console.log("Computer WINS!!");
  }
}

playGame();
