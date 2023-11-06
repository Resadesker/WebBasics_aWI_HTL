document.addEventListener("DOMContentLoaded", function() {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const message = document.getElementById("message");
    let computerChoiceElement = document.getElementById("computer-choice");

    const choices = ["Stein", "Papier", "Schere"];

    function computerChooses() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "Unentschieden!";
        } else if (
            (userChoice === "Stein" && computerChoice === "Schere") ||
            (userChoice === "Papier" && computerChoice === "Stein") ||
            (userChoice === "Schere" && computerChoice === "Papier")
        ) {
            return "Du gewinnst!";
        } else {
            return "Computer gewinnt!";
        }
    }

    function displayResult(userChoice, computerChoice) {
        message.textContent = determineWinner(userChoice, computerChoice);
        computerChoiceElement.textContent = `Computer wählt: ${computerChoice}`;
    }

    rockButton.addEventListener("click", function() {
        const userChoice = "Stein";
        const computer = computerChooses();
        displayResult(userChoice, computer);
    });

    paperButton.addEventListener("click", function() {
        const userChoice = "Papier";
        const computer = computerChooses();
        displayResult(userChoice, computer);
    });

    scissorsButton.addEventListener("click", function() {
        const userChoice = "Schere";
        const computer = computerChooses();
        displayResult(userChoice, computer);
    });
});
