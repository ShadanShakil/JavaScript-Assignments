let jsQuestions = [
    " Declare a variable named 'age' and assign it the value 25.",
    " Create an array named 'fruits' with the elements 'apple', 'banana', and 'cherry'.",
    " Add 'orange' to the end of the 'fruits' array.",
    " Remove the first element from the 'fruits' array.",
    " Write a function named 'sum' that takes two parameters and returns their sum.",
    " Write an if statement that checks if a variable 'x' is greater than 10.",
    " Create a variable 'isAdult' and assign it the result of checking if 'age' is greater than or equal to 18.",
    " Write a function named 'greet' that takes a name as a parameter and returns 'Hello, ' followed by the name.",
    " Create an array named 'numbers' with the elements 1, 2, 3, 4, 5.",
    " Use a for loop to iterate over the 'numbers' array and print each number.",
    " Write a function named 'isEven' that returns true if a number is even and false otherwise.",
    " Write a function named 'multiply' that takes two parameters and returns their product.",
    " Write an if-else statement that assigns 'even' to a variable if a number is even and 'odd' if it is not.",
    " Create a variable 'result' and use the ternary operator to assign 'pass' if a variable 'score' is greater than 50, otherwise 'fail'.",
    " Declare a variable 'message' and assign it the value 'Hello, World!'.",
    " Write a function named 'max' that takes two numbers and returns the larger one.",
    ' Create a for loop that prints the numbers from 1 to 10.',
    " Create an array named 'letters' with the elements 'a', 'b', 'c'.",
    " Write a function named 'square' that takes a number and returns its square.",
    " Write an if statement that checks if a variable 'temperature' is less than 0 and prints 'Freezing' if true."
  ]


let allbox = document.getElementsByClassName("box");

for(i=0; i < allbox.length; i++){
    allbox[i].addEventListener('click', function(){
        clearAll();
        this.style.backgroundColor = "white";
        this.style.color = "black"
        this.style.fontSize = "16px"
        this.innerText = jsQuestions[Math.floor(Math.random()*20)]
    })
}

function clearAll(){
    for(i=0; i < allbox.length; i++){
        allbox[i].style.backgroundColor = "black";
        allbox[i].style.color = "white"
        allbox[i].innerText = i+1;
        allbox[i].style.fontSize = "30px";
}}