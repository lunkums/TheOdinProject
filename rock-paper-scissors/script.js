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
