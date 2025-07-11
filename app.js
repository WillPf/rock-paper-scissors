let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector(".btn-ctn");
const resultContainer = document.querySelector(".result-ctn");

container.addEventListener("click", (e) => {
    while (resultContainer.firstChild) {
  resultContainer.removeChild(resultContainer.firstChild);
}
    playRound(e.target.id, getComputerChoice()); 
})

function showResult(player, computer) {
    let p = document.createElement("img");
    p.src = `./assets/${player}.jpg`;
    p.classList.add("choice-img");
    let c = document.createElement("img");
    c.src = `./assets/${computer}.jpg`;
    c.classList.add("choice-img");
    resultContainer.appendChild(p);
    resultContainer.appendChild(c);
}


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {    
    if (humanChoice === computerChoice)  {
        showResult(humanChoice, computerChoice);
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            showResult(humanChoice, computerChoice);
            humanScore++;
        } else {
            showResult(humanChoice, computerChoice);
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            showResult(humanChoice, computerChoice);
            humanScore++;
        } else {
            showResult(humanChoice, computerChoice);
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            showResult(humanChoice, computerChoice);
            humanScore++;
        } else {
            showResult(humanChoice, computerChoice);
            computerScore++;
        }
    }

}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore == computerScore) alert(`You tied with both ${humanScore} points.`);
//     else if (humanScore > computerScore) alert(`You won with ${humanScore} points against ${computerScore} points.`);
//     else if (humanScore < computerScore) alert(`You lost with ${humanScore} points against ${computerScore} points.`)
// }

// playGame();