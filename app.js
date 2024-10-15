//Data types
let k_word = "level";
let num = 5;

function Prime_or_Not(num) {
    //Conditional statements
    if(num === 2) {
        return num + " is a Prime Number";
    } else if (num === 1) {
        return num + " is not a Prime Number";
    } else if(num % 2 === 0) {
        return num + " is not a Prime Number";
    }else {
        return num + " is a Prime Number";
    }

} 
//Loops
for(i = 0; i <= num; i++) {
    console.log(Prime_or_Not(i));
}
console.log("~~~~~~~~~~~~~~~~~");

function Odd_Even(num) {
    
    //Conditional Statements
    if(num >= 0 && num <= 5) {
      switch(num % 2) {
        case 0:
            return num + " is an Even Number";
        default:
            return num + " is an Odd Number";
      }
    }

} 
//loops
for(i = 0; i <= num; i++) {
    console.log(Odd_Even(i));
}
console.log("~~~~~~~~~~~~~~~~~");

function Palindrome_or_Not(word) {
    
    let lowerCaseName = word.toLowerCase();
    let reversedName = lowerCaseName.split("").reverse().join("");
    //COnditional Statements
    if (lowerCaseName === reversedName) {
        return "'"+ word + "'" + " is a Palindrome";
    } else {
        return "'" + word + "'" + " is not a Palindrome";
    }
}
console.log(Palindrome_or_Not(k_word));