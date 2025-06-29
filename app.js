let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choices = ["rock", "paper", "scissors"];
    let user = parseInt(prompt("Please type 1 for rock, 2 for paper, or 3 for scissors"));
    return choices[user - 1];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)  {
        alert(`You both picked ${humanChoice}, it's a tie.`)
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            alert(`You won, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            alert(`You lost, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert(`You won, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            alert(`You lost, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            alert(`You won, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            alert(`You lost, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == computerScore) alert(`You tied with both ${humanScore} points.`);
    else if (humanScore > computerScore) alert(`You won with ${humanScore} points against ${computerScore} points.`);
    else if (humanScore < computerScore) alert(`You lost with ${humanScore} points against ${computerScore} points.`)
}

playGame();