const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const EXIT = "Exit";

let playerScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const score = document.querySelector("#score");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

function buttonClick() {
  if (getWinState()) {
    return;
  }
  const result = playRound(this.textContent, getComputerChoice());
  results.textContent = result;
  score.textContent = `Score: ${playerScore} (Player) to ${computerScore} (Computer)`;

  let winState = getWinState();
  if (winState) {
    results.textContent = `Game Over! You ${winState}!`;
    resetButton.classList.remove("invisible");
  }
}

function reset() {
  results.textContent = "Press a button to play!";
  playerScore = computerScore = 0;
  score.textContent = `Score: ${playerScore} (Player) to ${computerScore} (Computer)`;
  resetButton.classList.add("invisible");
}

function getWinState() {
  if (playerScore > 4) {
    return "win";
  } else if (computerScore > 4) {
    return "lose";
  } else {
    return null;
  }
}

function isValidInput(input) {
  return input === ROCK || input === PAPER || input === SCISSORS;
}

function playRound(playerSelection, computerSelection) {
  let result;
  let playerWins;

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  switch (playerSelection) {
    case ROCK:
      playerWins = computerSelection === SCISSORS;
      break;
    case PAPER:
      playerWins = computerSelection === ROCK;
      break;
    case SCISSORS:
      playerWins = computerSelection === PAPER;
      break;
    default:
      return "It's a tie!";
  }

  if (playerWins) {
    result = `You win this round! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    result = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  return result;
}

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  let choice;

  switch (rand) {
    case 0:
      choice = ROCK;
      break;
    case 1:
      choice = PAPER;
      break;
    case 2:
    default:
      choice = SCISSORS;
      break;
  }

  return choice;
}

function formatInput(input) {
  const lowerCaseInput = input.toLowerCase().trim();
  return lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);
}
