#! /usr/bin/env node

import inquirer from "inquirer";

// Function to play the game
const playGame = async () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guessedCorrectly = false;

  //loop for the game to continue until the correct answer or to game to end
  while (!guessedCorrectly) {
    const answer = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: (Enter 0 to exit)",
      },
    ]);

//compare user input with computer generated number and show result.
    if (answer.userGuessedNumber === 0) {
      console.log("Thank you for playing! Goodbye.");
      break;
    } else if (answer.userGuessedNumber === randomNumber) {
      console.log("Congratulations! You guessed the right number.");
      guessedCorrectly = true;
    } else {
      console.log("Sorry! Your guess is not correct. Try again!");
    }
  }
};

//calls the function
playGame();