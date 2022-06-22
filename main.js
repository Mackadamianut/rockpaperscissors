let playerScore = 0;
let compScore = 0;

function computerPlay() {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "You tied! You both picked Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "You tied! You both picked Scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "You tied! You both picked Paper." // end of ties
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return "You Win! Paper beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return "You Lose! Rock smashes Scissors."
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return "You Win! You Rock smashes Scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return "You Lose! Scissors cut Paper."// end of scissors
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return "You Lose! Paper beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return "You Win! Scissors cut Paper." // end of paper
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose what to throw", "Rock, Paper, Scissors").toLowerCase();
    const computerSelection = computerPlay(); 
    console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > compScore) {
        return "You beat the computer! You are a genius!"
    } else if (playerScore < compScore) {
        return "You lost to the computer! You suck!"
    } else {
        return "You tied! Better luck next time."
    }
}

console.log(game());

