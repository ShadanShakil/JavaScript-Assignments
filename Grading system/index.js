let maths = +prompt("Enter your marks in maths");
let english = +prompt("Enter your marks in engilsh");
let urdu = +prompt("Enter your marks in urdu");
let physics = +prompt("Enter your marks in physics");
let chemistry = +prompt("Enter your marks in chemistry");

let marksObatained = maths + english + urdu + physics + chemistry;
let totalMarks = 500;

let percentage = (marksObatained / totalMarks) * 100;

if (isNaN(percentage)) {
    console.log('Please enter a valid number');
}
else {
    document.write("<h2>Your Percentage is: " + percentage + "%</h2>")
}

//Grade calculation

if (percentage <= 100) {
    if (percentage >= 80) {
        document.write("<h1>You scored  an A+ grade.</h1>");
    }
    else if (percentage >= 70) {
        document.write("<h1>You scored  an A grade.</h1>");
    }
    else if (percentage >= 60) {
        document.write("<h1>You scored  an B grade.</h1>");
    }
    else if (percentage >= 50) {
        documwent.write("<h1>You scored  an C grade.</h1>");
    }
    else if (percentage >= 40) {
        document.write("<h1>You scored  an D grade. But you should try harder next time.</h1>");
    }
    else {
        document.write("<h1>Sorry you Failed! Try again next time.</h1>");
    }
}
else {
    document.write("<h1>Please enter Valid Marks! (Enter marks out of 100).</h1>");
}