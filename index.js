function getComputerChoice() {
  let randomSelector = Math.floor(Math.random() * 3) + 1;

  if (randomSelector === 1) {
    return "rock";
  } else if (randomSelector === 2) {
    return "paper";
  } else return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Choose: rock, paper or scissors");

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

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

    //MAKE THE GAME GO AS LONG AS THE SCORE IS LESS THAN 5
    // if (humanScore === 5) {
    //   console.log("Winner winner");
    // } else if (computerScore === 5) {
    //   console.log("Winner winner");
    // } else {
    //   getHumanChoice();
    //   getComputerChoice();
    // }

    console.log(humanScore);
    console.log(computerScore);
  }
  playRound(humanSelection, computerSelection);
}

playGame();
