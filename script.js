"use strict";

// Generates random number between 1 and upper limit
const upperLimit = 20;
const secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // 0 is a falsy value -> evaluated as false
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
  } else {
    document.querySelector(".message").textContent = "Correct!";
  }
});
