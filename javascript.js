function getComputerChoice(){
    let randomNumber = Math.random() * 3;
    if(randomNumber < 1){
        return "Rock";
    } else if(randomNumber < 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose one: Rock, Paper, Scissors", ).toLowerCase();
    return choice.replace(choice[0], choice[0].toUpperCase());

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.clear();
    if(humanChoice === computerChoice){
        console.log(`DRAW! You both chose: ${humanChoice}.`);
    } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame(){
    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.clear();
    if(humanScore == computerScore){
        console.log("DRAW!\n\n");
        console.log(`FINAL SCORE\n`);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if(humanScore > computerScore){
        console.log("CONGRATULATIONS, YOU WON!\n\n");
        console.log(`FINAL SCORE\n`);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else {
        console.log("OH NO, YOU LOST!\n\n");
        console.log(`FINAL SCORE\n`);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

playGame();

