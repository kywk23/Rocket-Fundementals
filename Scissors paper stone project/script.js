// var main = function (userInput) {
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// 1 ) Create computer's choice on random
var getComputerChoice = function () {
  var computerChoiceArray = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * computerChoiceArray.length;
  var randomizeInt = Math.floor(randomDecimal);
  var ComputerChoice = computerChoiceArray[randomizeInt];
  return ComputerChoice;
};
// // 2) userInput Validation function
var validateUserInput = function (userInput) {
  if (
    userInput === "paper" ||
    userInput === "stone" ||
    userInput === "scissors"
  ) {
    return true;
  } else {
    return false;
  }
};
// 3) Game
var main = function (userInput) {
  var isUserInputValid = validateUserInput(userInput);
  // var myOutputValue; // << (IS DECLARING THE myOutputValue Variable NECESSARY? )
  if (isUserInputValid) {
    var computerChoice = getComputerChoice();
    // Draw Scenario
    if (computerChoice === userInput) {
      myOutputValue = `it's a draw!`;
      console.log("draw");
    } else {
      // User Win Scenario
      if (
        (userInput == "scissors" && computerChoice == "paper") ||
        (userInput == "paper" && computerChoice == "stone") ||
        (userInput == "stone" && computerChoice == "scissors")
      ) {
        myOutputValue = `you win! <br> computer's choice is, ${computerChoice}`;
        console.log("you win");
        // User Lose Scenario
      } else {
        myOutputValue = `you lose! <br> noob`;
        console.log("you lose");
      }
    }
  } else {
    console.log("Invalid input. Please input again");
  }
  console.log(`user input validation is`, isUserInputValid);
  console.log(`computer choice is`, computerChoice);
  console.log(`user keyed in`, userInput);
  return myOutputValue;
};
