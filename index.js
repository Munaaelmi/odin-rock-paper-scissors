const btn = document.querySelectorAll(".btn");
const computerSelection = document.querySelector(".computerSelection");
const playerSelection = document.querySelector(".playerSelection");
const resultDisplay = document.querySelector(".resultDisplay");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

const choice = ["👊", "✋", "✌️"];

let playerCounter = 0;
let computerCounter = 0;
let countRound = 0;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (countRound < 5) {
      let playerChoice = button.textContent;
      let computerChoice = getComputerChoice();

      let result = getResult(playerChoice, computerChoice);
      console.log(result);

      if (result === "You Win! 🎉") {
        playerCounter++;
      } else if (result === "You Lose! 😭") {
        computerCounter++;
      }

      playerSelection.textContent = `Player: ${playerChoice}`;
      computerSelection.textContent = `Computer: ${computerChoice}`;
      resultDisplay.textContent = `Result: ${result}`;
      playerScore.textContent = `Player Score: ${playerCounter}`;
      computerScore.textContent = `Computer Score: ${computerCounter}`;
    }
    countRound++;

    if (countRound > 5) {
      endGame();
    }
  });
});

function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw! 🙃";
  } else if (computerChoice === "👊") {
    return playerChoice === "✋" ? "You Win! 🎉" : "You Lose! 😭";
  } else if (computerChoice === "✋") {
    return playerChoice === "✌️" ? "You Win! 🎉" : "You Lose! 😭";
  } else if (computerChoice === "✌️") {
    return playerChoice === "👊" ? "You Win! 🎉" : "You Lose! 😭";
  }
}

function endGame() {
  if (playerCounter > computerCounter) {
    resultDisplay.textContent = "Game Over! You Win the Match! 🏆";
    resultDisplay.classList.add("winner");
  } else if (playerCounter < computerCounter) {
    resultDisplay.textContent = "Game Over! Computer Wins! 🤖";
    resultDisplay.classList.add("loser");
  } else {
    resultDisplay.textContent = "Game Over! It's a draw! 😐";
  }
}
