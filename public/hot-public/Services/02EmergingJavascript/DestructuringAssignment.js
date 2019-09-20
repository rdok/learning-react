"use strict";

var sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};
var bread = sandwich.bread,
    meat = sandwich.meat;
console.log(bread, meat); // dutch crunch tuna

console.log('=========[ Destructure incoming function arguments ]=============================');

var lordify = function lordify(regularPerson) {
  console.log("".concat(regularPerson.firstName, " of Canterbury"));
};

var regularPerson = {
  firstName: "Bill",
  lastName: "Wilson"
};
lordify(regularPerson);
console.log('=========[ Dot notation ]=============================');

var lordify = function lordify(_ref) {
  var firstName = _ref.firstName;
  console.log("".concat(firstName, " of Canterbury"));
};

lordify(regularPerson);
console.log('=========[ Array Destructuring ]===============================');
var _ref2 = ["Kirkwood", "Squaw", "Alpine"],
    firstResort = _ref2[0];
console.log(firstResort); // Kirkwood

var _ref3 = ["Kirkwood", "Squaw", "Alpine"],
    thirdResort = _ref3[2];
console.log(thirdResort); // Alpine