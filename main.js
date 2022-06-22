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
        return "You Win! Paper beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock smashes Scissors." // end of vs rock
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! You Rock smashes Scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors cut Paper."// end of scissors
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors cut Paper." // end of paper
    }
}
