let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  else if (randomNumber === 1) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  if (humanChoice === computerChoice) {
    results.innerHTML = `
            <p>It's a tie!</p>
            <p>Score: You ${humanScore} - ${computerScore} Computer</p>
        `;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;

    results.innerHTML = `
            <p>You win! ${humanChoice} beats ${computerChoice}.</p>
            <p>Score: You ${humanScore} - ${computerScore} Computer</p>
        `;
  } else {
    computerScore++;

    results.innerHTML = `
    <p><strong>You:</strong> ${humanChoice}</p>
    <p><strong>Computer:</strong> ${computerChoice}</p>
    <p>You win! ${humanChoice} beats ${computerChoice}.</p>
    <p>Score: ${humanScore} - ${computerScore}</p>
        `;
  }

  if (humanScore === 5) {
    results.innerHTML += `<h2>You won the game :)</h2>`;
  }

  if (computerScore === 5) {
    results.innerHTML += `<h2>Computer won the game :(</h2>`;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
