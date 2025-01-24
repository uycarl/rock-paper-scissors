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

console.log(getComputerChoice());

function getHumanChoice(){
    
}

