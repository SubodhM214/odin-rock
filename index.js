// console.log("Hello World!");
// // console.log(Math.floor(Math.random() * 10) % 3);
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const option = Math.floor(Math.random() * 10) % options.length;
  return options[option];
}

let humanScore = 0;
let compScore = 0;

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    humanScore += 1;
    compScore += 1;
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    compScore += 1;
  } else {
    humanScore += 1;
  }

  playerScore.textContent = humanScore;
  computerScore.textContent = compScore;

  if (humanScore === 5 || compScore === 5) {
    let result = document.querySelector(".result-message");
    if (humanScore > compScore) {
      result.textContent = "You win the game!";
      console.log(result.textContent);
    } else {
      result.textContent = "Computer wins the game!";
      console.log(result.textContent);
    }
    playAgain.style.display = "block";
    playAgain.addEventListener("click", () => {
      document.querySelector(".result-message").textContent = "";
      console.log("cleared");
      humanScore = 0;
      compScore = 0;
      playerScore.textContent = humanScore;
      computerScore.textContent = compScore;
      playAgain.style.display = "none";
    });
  }
}

const choices = document.querySelector(".choices");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
const playAgain = document.querySelector("#play-again");

playAgain.style.display = "none";
choices.addEventListener("click", (e) => {
  let choice = e.target;
  if (choice.tagName === "BUTTON") {
    const humanSelection = choice.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
});

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`Round ${i}`);

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     console.log(
//       `Your choice ${humanSelection}, Computer choice ${computerSelection}`
//     );
//     if (playRound(humanSelection, computerSelection) == "Tie") {
//       humanScore += 1;
//       computerScore += 1;
//     } else if (playRound(humanSelection, computerSelection) == "You win!") {
//       humanScore += 1;
//     } else {
//       computerScore += 1;
//     }
//   }
//   console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
//   if (humanScore > computerScore) {
//     console.log("You win the game!");
//   } else {
//     console.log("You lose the game!");
//   }
//   console.log("Game over!");
//   humanScore = 0;
//   computerScore = 0;
// }

// playGame();

// function getHumanChoice() {
//   let validateChoice = false;
//   while (validateChoice == false) {
//     let humanOption = prompt("Choose rock paper or scissor");
//     if (humanOption == null) {
//       continue;
//     }
//     const humanChoice = humanOption.toLowerCase();
//     if (choices.includes(humanChoice)) {
//       validateChoice = true;
//       return humanChoice;
//     }
//   }
// }
