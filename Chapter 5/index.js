// question 1 and 2

let a = 4;
let b = 2;

let  c = a + b;
let d = a - b;
let e = a * b; 
let f = a / b;
let  g = a % b;

document.write(`sum of ${a} and ${b} is  ${c}`);
document.write("<br><br>")
document.write(`subtraction of ${a} and ${b} is  ${d}`);
document.write("<br><br>")
document.write(`multiplication of ${a} and ${b} is  ${d}`);
document.write("<br><br>")
document.write(`division of ${a} and ${b} is  ${d}`);
document.write("<br><br>")
document.write(`modulus of ${a} and ${b} is  ${d}`);
document.write("<br><br>")
document.write("<br><br>")


// question 3

var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");


// question 4

let price = 600;
let quantity = 5;
let sum = price * quantity;

document.write("<br><br>")
document.write("<br><br>")
document.write(`Total cost to buy ${quantity} tickets to a movie are ${sum}.`)


// question 5

var num = 4;
document.write("<h2>Multiplication Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}


// question 6

// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}

document.write("<br><br>");
document.write("<br><br>");


// question 7

let price1 = 650;
let quantity1 = 3;
let price2 = 100;
let quantity2 = 7;
let shipping = 100;
let total = price1*quantity1+price2*quantity2+shipping;

document.write(`Price of item1 is ${price1} <br>`);
document.write(`quantity of item1 is ${quantity1} <br>`);
document.write(`Price of item2 is ${price2} <br>`);
document.write(`quantity of item1 is ${quantity2} <br>`);
document.write(`Shipping charges ${shipping} <br><br><br>`);
document.write(`Total cost of your order is ${total}`);

document.write("<br><br>")
document.write("<br><br>")


// question 8

let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.write(`Total Marks: ${totalMarks}`);
document.write(`<br>`);
document.write(`Marks Obatined: ${marksObtained}`);
document.write("<br>");
document.write(`Percentage: ${percentage}`);

document.write("<br><br>")
document.write("<br><br>")


// question 9

let usDollars = 10;
let saudiRiyals = 25;
let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;

let totalInPakistaniRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("Total in Pakistani Rupees: " + totalInPakistaniRupees);

document.write("<br><br>")
document.write("<br><br>")


// question 10

let number = 10;
let results = ((number + 5) * 10) / 2;
document.write("Result: " + results);

document.write("<br><br>")
document.write("<br><br>")


// question 11

let currentYear = new Date().getFullYear();
let birthYear = 2006;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.");


document.write("<br><br>")
document.write("<br><br>")


// question 12

let radius = 10;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));

document.write("<br><br>")
document.write("<br><br>")


// question 13

let favoriteSnack = "chocolate";
let currentAge = 25;
let maxAge = 80;
let amountPerDay = 2;
let yearsRemaining = maxAge - currentAge;
let snacksPerYear = amountPerDay * 365;
let totalSnacksRequired = snacksPerYear * yearsRemaining;
document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
