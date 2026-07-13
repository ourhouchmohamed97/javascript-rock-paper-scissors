let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumer = Math.floor(Math.random() * 3);

    if (randomNumer === 0)
        return "rock";
    else if (randomNumer === 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice () {
    const choice = prompt("Enter rock, paper, or scissors: ");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors")
        alert ("Bad Choice !");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());


    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }

    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
