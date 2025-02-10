function getHumanChoice() {
  let choice = prompt("Choose: rock, paper or scissors").toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice, please choose rock, paper, or scissors.");
    return getHumanChoice();
  }
}
function getComputerChoice() {
  let randomSelector = Math.floor(Math.random() * 3);

  if (randomSelector === 0) {
    return "rock";
  } else if (randomSelector === 1) {
    return "paper";
  } else return "scissors";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a draw! ${computerChoice} V ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  let winner = humanScore > computerScore ? "You win! 🏆" : "Computer wins! 🎉";
  console.log(winner);
}

playGame();
