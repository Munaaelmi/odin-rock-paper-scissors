function getComputerChoice() {
  let randomSelector = Math.floor(Math.random() * 3) + 1;

  if (randomSelector === 1) {
    return "rock";
  } else if (randomSelector === 2) {
    return "paper";
  } else return "scissors";
}

function getHumanChoice() {
  for (let i = 0; i < 5; i++) {
    let choice = prompt("Choose: rock, paper or scissors");
    console.log(choice);
  }
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

console.log(humanSelection);

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//       console.log(`It's a draw! ${computerChoice} V ${humanChoice}`);
//     } else if (humanChoice === "rock" && computerChoice === "scissors") {
//       console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
//       humanScore++;
//     } else if (humanChoice === "paper" && computerChoice === "rock") {
//       console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
//       humanScore++;
//     } else if (humanChoice === "scissors" && computerChoice === "paper") {
//       console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
//       humanScore++;
//     } else {
//       console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//       computerScore++;
//     }
//     console.log(humanScore);
//     console.log(computerScore);
//   }

//   playRound(humanSelection, computerSelection);
// }

// playGame();
