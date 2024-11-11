console.log("Hello World!");
// console.log(Math.floor(Math.random() * 10) % 3);
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const option = Math.floor(Math.random() * 10) % choices.length;
  return choices[option];
}

function getHumanChoice() {
  let validateChoice = false;
  while (validateChoice == false) {
    let humanOption = prompt("Choose rock paper or scissor");
    if (humanOption == null) {
      continue;
    }
    const humanChoice = humanOption.toLowerCase();
    if (choices.includes(humanChoice)) {
      validateChoice = true;
      return humanChoice;
    }
  }
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return "Tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "rock")
  ) {
    return "You lose!";
  } else {
    return "You win!";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(
      `Your choice ${humanSelection}, Computer choice ${computerSelection}`
    );
    if (playRound(humanSelection, computerSelection) == "Tie") {
      humanScore += 1;
      computerScore += 1;
    } else if (playRound(humanSelection, computerSelection) == "You win!") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }
  console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game!");
  }
  console.log("Game over!");
  humanScore = 0;
  computerScore = 0;
}

playGame();
