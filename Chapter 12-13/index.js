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
const firstInteger = +(prompt("Enter the first integer:"));
const secondInteger = +(prompt("Enter the second integer:"));

function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num1 < num2) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both integers are equal.");
    }
}


compareIntegers(firstInteger, secondInteger);

// question 3

let number = +prompt("Enter your number!")

if (number > 0) {

    console.log(`${number} is  positive.`);

}

else if (number === 0) {

    console.log("this is a zero")

}

else if (number < 0) {

    console.log(`${number} is negative`);

}

else {

    alert('Please enter a valid number');
}

// Question 4

const char = prompt("Enter a character:")

if (char.length === 1) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log("The character is a vowel.");
    } else {
        console.log("The character is not a vowel.");
    }
} else {
    console.log("Please enter only one character.");
}

// question 5

let password = "shadan123";
let inputpass = prompt("Please enter your password");

if(inputpass===password){
    document.write( "<h1>Correct! The password you entered matches the original password</h1>" );
}
else if(inputpass === ""){
    document.write("<h1>Please enter your password!</h1>")
}
else{
    document.write("<h1>Incorrect password!</h1>")
}

// question 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(`<h1>${greeting} , welcome to our website!</h1>`);

//question 7

const userInput = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

if (userInput >= 0 && userInput < 1200) {
    console.log("Good morning!");
} else if (userInput >= 1200 && userInput < 1700) {
    console.log("Good afternoon!");
} else if (userInput >= 1700 && userInput < 2100) {
    console.log("Good evening!");
} else if (userInput >= 2100 && userInput <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid input.");
}
