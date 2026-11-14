let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let msg = document.getElementById("msg");
let usedChoice = document.getElementById("userChoice");
let computedChoice = document.getElementById("computerChoice");
let vs = document.getElementById("vs");
const options = document.querySelectorAll(".option");


const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.id;
        console.log("User choice:", userChoice);
        const computerChoice = getComputerChoice();
        console.log("Computer choice:", computerChoice);
        if (userChoice === computerChoice) {
            msg.innerText = "It's a tie!";
            usedChoice.innerText = userChoice;
            computedChoice.innerText = computerChoice;
            vs.innerText = "=";
        }
        else if ((userChoice === "rock" && computerChoice === "scissors") ||
                   (userChoice === "paper" && computerChoice === "rock") ||
                   (userChoice === "scissors" && computerChoice === "paper")) {
            msg.innerText = "You win!";
            userScore.innerText = parseInt(userScore.innerText) + 1;
            usedChoice.innerText = userChoice;
            computedChoice.innerText = computerChoice;
            vs.innerText = ">";
        }
        else {
            msg.innerText = "Computer wins!";
            computerScore.innerText = parseInt(computerScore.innerText) + 1;
            usedChoice.innerText = userChoice;
            computedChoice.innerText = computerChoice;
            vs.innerText = "<";
        }
    });
});
