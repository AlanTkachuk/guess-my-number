"use strict";

// Helper function to change text content
const changeText = function (element, message) {
  document.querySelector(element).textContent = message;
};

const upperLimit = 10;
let guessesRemaining = 10;
let guessCount = 0;
let secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
let highScore = upperLimit;
changeText(".limit", upperLimit);
changeText(".remaining", guessesRemaining);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // Only executes with remaining guesses
  if (guessesRemaining) {
    // When no input
    if (!guess) {
      changeText(".message", "No number!");
    }

    // When guess is incorrect
    else if (guess != secretNumber) {
      if (guessesRemaining > 1) {
        changeText(".message", guess > secretNumber ? "Too high!" : "Too low!");
        guessesRemaining--;
        changeText(".remaining", guessesRemaining);
      } else if (guessesRemaining == 1) {
        guessesRemaining--;
        changeText(".remaining", guessesRemaining);
        changeText(".message", "You lost the game.");

        // Losing style
        changeText(".number", secretNumber);
        document.querySelector("body").style.backgroundColor = "#b80f0a";
        document.querySelector(".number").style.width = "30rem";
      }
      guessCount++;
    }

    // When guess is correct
    else {
      guessesRemaining--;
      changeText(".remaining", guessesRemaining);
      guessCount++;
      guessesRemaining = 0; // Stop game functionality

      // Update high score
      if (guessCount <= highScore) {
        highScore = guessCount;
        if (highScore == 1) {
          changeText(".highscore", `${highScore} guess`);
        } else {
          changeText(".highscore", `${highScore} guesses`);
        }
      }

      // Winning style
      changeText(".message", "You win!");
      changeText(".number", secretNumber);
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  guessesRemaining = upperLimit;
  guessCount = 0;
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
  changeText(".remaining", guessesRemaining);
  changeText(".number", "?");
  changeText(".message", "Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
