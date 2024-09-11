// Variable declarations with data types
let firstNumber = 1;
let secondNumber = 5;

let name = "pie";
let singleCharacter = 'a';

// Arithmetic operations
let difference = firstNumber - secondNumber;
console.log('Difference:', difference);

let sum = firstNumber + secondNumber;
console.log('Sum:', sum);

let product = firstNumber * secondNumber;
console.log('Product:', product);

// Handling division by zero
if (secondNumber !== 0) {
    let quotient = firstNumber / secondNumber;
    console.log('Quotient:', quotient);
} else {
    console.log("Error: Division by zero is not allowed.");
}

// Conditional statements
let age = 10;
let ageCategory = age >= 18 ? "Adult" : "Minor";
console.log(ageCategory);

// Switch statement
let alphabet = 'B';

switch (alphabet) {
    case 'A':
        console.log('Letter A');
        break;
    case 'B':
        console.log('Letter B');
        break;
    case 'C':
        console.log('Letter C');
        break;
    case 'D':
        console.log('Letter D');
        break;
    default:
        console.log('Unknown Letter');
}

// For loop example
for (let i = 0; i < 15; i++) {
    console.log('For Loop Iteration:', i);
}

// While loop example
let counter = 0;
while (counter < 15) {
    console.log('While Loop Iteration:', counter);
    counter++;
}

// Function to check if a number is odd or even
function isEvenOrOdd(number) {
    return number % 2 === 0 ? ${number} is even : ${number} is odd;
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(17));