//Rock Paper Scissors Game

// --- Select DOM elements ---
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

// --- Score variables ---
let playerScore = 0;
let computerScore = 0;

// --- Helper: get computer choice ---
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// --- Game logic: determine round result ---
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

// --- Helper: disable buttons when game ends ---
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// --- Button click handlers ---
function handleClick(playerChoice) {
  const result = playRound(playerChoice);

  // Update scores
  if (result.startsWith('You win')) {
    playerScore += 1;
  } else if (result.startsWith('You lose')) {
    computerScore += 1;
  }

  // Update DOM
  resultsDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for game winner
  if (playerScore === 5) {
    winnerDiv.textContent = 'You won the game!';
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = 'Computer won the game!';
    disableButtons();
  }
}

// --- Attach event listeners ---
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
