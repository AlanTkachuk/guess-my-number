"use strict";

// Generates random number between 1 and upper limit
const upperLimit = 20;
let secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
let score = upperLimit;
let highScore = upperLimit;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "You lost the game.";
    }
  }

  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "You lost the game.";
    }
  }

  // When guess is correct
  else {
    const numberOfGuesses = upperLimit - score + 1;

    if (numberOfGuesses <= highScore) {
      highScore = numberOfGuesses;
      if (highScore == 1) {
        document.querySelector(".highscore").textContent = `${highScore} guess`;
      } else {
        document.querySelector(
          ".highscore"
        ).textContent = `${highScore} guesses`;
      }
    }

    document.querySelector(".message").textContent = "Correct!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = upperLimit;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
});
