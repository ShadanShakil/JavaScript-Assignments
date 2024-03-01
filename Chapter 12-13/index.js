// question 1

let inputChar = prompt("Enter a character:");

if (!isNaN(inputChar)) {
    console.log(inputChar + " is a number.");
} else if (inputChar >= 'A' && inputChar <= 'Z') {
    console.log(inputChar + " is an uppercase letter.");
} else if (inputChar >= 'a' && inputChar <= 'z') {
    console.log(inputChar + " is a lowercase letter.");
} else {
    console.log(inputChar + " is neither a number nor a letter.");
}


// question 2

