// // Day 2 - Exercise - Minutes in Weeks
// The user will enter a number of weeks. The program should output the number of minutes in those weeks in the output box.
// Format the output nicely. Like: In 3 weeks there are 30240 minutes! Wow!

// var main = function (input) {
//   var week = input;
//   var totalMinutes = 10080 * week;
//   var myOutputValue = `In ${input} weeks there are ${totalMinutes} minutes!`;
//   return myOutputValue;
// };

// Exercise - Road Trip Cost
// The user will enter the length of a planned road trip in his brand new Ferrari. The program should output the estimated fuel cost of the road trip.
// A new Ferrari consumes 9km/litre. Petrol costs $2.20/litre.
// Format the output nicely.

// var main = function (input) {
//   var lengthRoadTrip = input;
//   var petrolConsume = lengthRoadTrip / 9;
//   var petrolCost = 2.2 * petrolConsume;
//   var myOutputValue = `Road trip ${input}km costs $${petrolCost.toFixed(2)}!`;
//   return myOutputValue;
// };

// Exercise - Ice Cream Buffet
// There's all-you-can-eat ice cream at the buffet. The buffet receives ice cream in 400ml containers. To save money the buffet only provides 70ml cups for customers to get ice cream.
// The user will enter a number of trips to the ice cream station (picking up 1 cup per trip) and the app will calculate how many containers of ice cream you would consume. It is ok to show the number of containers in decimal format

// var main = function (input) {
//   var tripNumber = input;
//   var consumption = tripNumber * 70;
//   var containersIceCream = consumption / 400;
//   var myOutputValue = `trips is ${input} and no. of containers ${containersIceCream.toFixed(
//     2
//   )}!`;
//   return myOutputValue;
// };

// Exercise - Time to Type Sonnets
// The user will enter their words-per-minute typing speed. The app will calculate how long it will take them to type all of Shakespeare's sonnets in hours.
// For simplicity, assume 17,677 words in all of Shakespeare's sonnets.

var main = function (input) {
  var wordsPerMin = input;
  var noOfMins = 17677 / wordsPerMin;
  var hours = noOfMins / 60;
  var myOutputValue = `words per minute typed is ${input} and ${hours.toFixed(
    2
  )} hours to finish sonnets`;
  return myOutputValue;
};
