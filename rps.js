let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
    let choices = Math.floor(Math.random() * 3) + 1;
    if(choices === 1){
        choices = "Rock";
    } else if ((choices === 2)){
        choices = "Paper";
    } else {
        choices = "Scissors";
    }
    return choices;
}

console.log("Computer selects:", getComputerChoice());

function getHumanChoice(){
    let getChoice = prompt("Rock, Paper or Scissor");
    return getChoice;
}

function playRound(humanChoice, computerChoice) {
    // your code here!
}

playRound(humanSelection, computerSelection);
