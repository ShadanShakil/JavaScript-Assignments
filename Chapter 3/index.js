// question 1

let age = 18;

alert("I am " + age + " years old!");


// question 2

// Declare and initialize a variable to keep track of the number of visits
let numberOfVisits = localStorage.getItem('numberOfVisits'); // Check if the value is already stored in local storage
if (!numberOfVisits) { // If not, initialize it to 0
    numberOfVisits = 0;
}
numberOfVisits++; // Increment the number of visits
localStorage.setItem('numberOfVisits', numberOfVisits); // Store the updated value in local storage

// Display the number of visits on the webpage
alert("You have visited this site " + numberOfVisits + " times.");


// question 3

let birthYear = 2006;

document.getElementById("head1").textContent= "My birth year is " + birthYear;


// question 4

let visitorname = "John Doe";
let product = "T-shirts";
let quantity = 5;

document.getElementById("head2").textContent = (`${visitorname} ordered  ${quantity} ${product} from xyz store.`);