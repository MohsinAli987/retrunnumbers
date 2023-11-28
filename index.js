const prompt = require("prompt-sync")({ sigint: true }); //import library

// get input from user
const firstValue = parseInt(prompt("Enter first digit "));
const secondValue = parseInt(prompt("Enter second digit "));

var total = firstValue + secondValue;
// first value handle

firstValueReturn = returnDifferent(firstValue);
console.log(`Returned First value is ${firstValueReturn}`);

secondValueReturn = returnDifferent(secondValue);
console.log(`Returned Second value is ${secondValueReturn}`);

function returnDifferent(inputValue) {
    return total - inputValue;
}