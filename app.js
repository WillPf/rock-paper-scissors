let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector(".btn-ctn");
const resultContainer = document.querySelector(".result-ctn");
const score = document.querySelector(".score");
const resultText = document.querySelector(".result-txt");

container.addEventListener("click", (e) => {
    while (resultContainer.firstChild) {
  resultContainer.removeChild(resultContainer.firstChild);
}
    playRound(e.target.id, getComputerChoice()); 
})

function showResult(players) {
    for (const player of players) {
        let p = document.createElement("img");
        p.src = `./assets/${player}.jpg`;
        p.style.cssText = "border-radius: 25px";
        resultContainer.appendChild(p);
    }
}


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {    
    if (humanChoice === computerChoice)  {
        showResult([humanChoice, computerChoice]);
         resultText.innerText = "You tied this round"
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            showResult([humanChoice, computerChoice]);
            humanScore++;
            resultText.innerText = "You won this round"
        } else {
            showResult([humanChoice, computerChoice]);
            computerScore++;
             resultText.innerText = "You lost this round"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            showResult([humanChoice, computerChoice]);
            humanScore++;
             resultText.innerText = "You won this round"
        } else {
            showResult([humanChoice, computerChoice]);
            computerScore++;
            resultText.innerText = "You lost this round"
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            showResult([humanChoice, computerChoice]);
            humanScore++;
            resultText.innerText = "You won this round"
        } else {
            showResult([humanChoice, computerChoice]);
            computerScore++;
            resultText.innerText = "You lost this round"
        }
    }
    score.innerHTML = `Score: ${humanScore} / ${computerScore}`;
    endGame();
}

function endGame() {
    const end = document.createElement("div");
    end.classList.add("end");
    end.addEventListener("click", ()=> {
        humanScore = 0;
        computerScore = 0;
        document.body.removeChild(end);
        score.innerHTML = `Score: ${humanScore} / ${computerScore}`;
        resultText.innerText = "";
        while (resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }
        
    })
    if (humanScore == 5) {
        end.innerText = "Congratulations, you won the game."
        document.body.appendChild(end);
    }
    if (computerScore == 5) {
        end.innerText = "OOPS! Sorry, you lost the game."
        document.body.appendChild(end);
    }
}