function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper, or scissors:");
    input = input.toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }   else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
    function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }

    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Computer won the game! Better luck next time.");
    }
}