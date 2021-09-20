console.log("Choose an option!");

const startGameBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let gameIsRunning = false;
let playerCounter = 0;
let computerCounter = 0;

let getPlayerChoice = ROCK;

// const getPlayerChoice = function () {
//   const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, "").toUpperCase();
//   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//     alert("Invalid choice! We chose 'Rock' for you.");
//     return ROCK;
//   }
//   return selection;
// };

const getComputerChoice = function () {
  let computerChoice = PAPER;
  const randomValue = Math.random() * 3;
  if (randomValue > 0 && randomValue < 1) {
    computerChoice = PAPER;
  } else if (randomValue > 1 && randomValue < 2) {
    computerChoice = ROCK;
  } else {
    computerChoice = SCISSORS;
  }
  return computerChoice;
};

const result = function () {
  const playerSelection = getPlayerChoice;
  console.log("Player: " + playerSelection);
  const computerSelection = getComputerChoice();
  console.log("Computer: " + computerSelection);
  if (
    (computerSelection === ROCK && playerSelection === SCISSORS) ||
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === SCISSORS && playerSelection === PAPER)
  ) {
    computerCounter++;
    console.log("Computer Points: " + computerCounter);
    console.log("Player Points: " + playerCounter);
  } else if (computerSelection === playerSelection) {
    console.log("Tie!");
    console.log("Computer Points: " + computerCounter);
    console.log("Player Points: " + playerCounter);
  } else {
    playerCounter++;
    console.log("Computer Points: " + computerCounter);
    console.log("Player Points: " + playerCounter);
  }
  console.log("");
  gameIsRunning = false;
  if (computerCounter === 5) {
    console.log("Computer Won!");
    console.log("Reload to restart the game!");
    gameIsRunning = true;
    return;
  } else if (playerCounter === 5) {
    console.log("You Won!");
    console.log("Reload to restart the game!");
    gameIsRunning = true;
    return;
  }
  console.log("Choose an option!");
};

rockBtn.addEventListener("click", function () {
  if (!gameIsRunning) {
    getPlayerChoice = ROCK;
    console.log("You chose ROCK! Now start the game.");
    return;
  }
});
scissorsBtn.addEventListener("click", function () {
  if (!gameIsRunning) {
    getPlayerChoice = SCISSORS;
    console.log("You chose SCISSORS! Now start the game.");
    return;
  }
});
paperBtn.addEventListener("click", function () {
  if (!gameIsRunning) {
    getPlayerChoice = PAPER;
    console.log("You chose PAPER! Now start the game.");
    return;
  }
});

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Starting game...");

  result();
});
