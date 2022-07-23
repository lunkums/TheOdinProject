function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  let choice;

  switch (rand) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
    default:
      choice = "Scissors";
      break;
  }

  return choice;
}

function round(playerSelection, computerSelection) {
  const playerSelectionNice = properyNounify(playerSelection.toLowerCase());
  let result;
  let playerWins;

  if (playerSelectionNice === computerSelection) {
    return "It's a tie!";
  }

  switch (playerSelectionNice) {
    case "Rock":
      playerWins = computerSelection === "Scissors";
      break;
    case "Paper":
      playerWins = computerSelection === "Rock";
      break;
    case "Scissors":
      playerWins = computerSelection === "Paper";
      break;
    default:
      return "It's a tie!";
  }

  if (playerWins) {
    result = `You win! ${playerSelectionNice} beats ${computerSelection}`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelectionNice}`;
  }

  return result;
}

function properNounify(noun) {
  return noun.charAt(0).toUpperCase() + noun.slice(1);
}
