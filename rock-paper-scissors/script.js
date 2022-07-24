const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const EXIT = "Exit";

window.onload = game;

function game() {
  let playerInput;

  while (true) {
    playerInput = formatInput(prompt("Rock, paper, or scissors? "));

    if (isValidInput(playerInput)) {
      alert(playRound(playerInput, getComputerChoice()));
    } else if (playerInput === EXIT) {
      break;
    }
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
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
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
