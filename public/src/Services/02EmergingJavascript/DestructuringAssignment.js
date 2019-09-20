var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}

var {bread, meat} = sandwich

console.log(bread, meat) // dutch crunch tuna

console.log('=========[ Destructure incoming function arguments ]=============================')
var lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
}

var regularPerson = {
    firstName: "Bill",
    lastName: "Wilson"
}
lordify(regularPerson)

console.log('=========[ Dot notation ]=============================')
var lordify = ({firstName}) => {
    console.log(`${firstName} of Canterbury`)
}

lordify(regularPerson)


console.log('=========[ Array Destructuring ]===============================')
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(firstResort) // Kirkwood

var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(thirdResort) // Alpine
