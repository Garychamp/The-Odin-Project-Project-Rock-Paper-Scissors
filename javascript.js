//Rock Paper Scissors Game

function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'Its a tie!';
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		return 'You win! ' + playerChoice + ' beats ' + computerChoice;
	} else {
		return 'You lose! ' + computerChoice + ' beats ' + playerChoice;
	}
}

let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {
	let computerChoice = getComputerChoice();
	let playerChoice = prompt ('rock, paper or scissors').trim().toLowerCase();
	let result = playRound(playerChoice, computerChoice);
	console.log(result);
	if (result.startsWith('You win')) {
		playerScore +=1;
	} else if (result.startsWith('You lose')) {
		computerScore +=1;
	}
}

if (playerScore ===5) {
	console.log('You won the game!');
} else {
	console.log('Computer won the game!');
}