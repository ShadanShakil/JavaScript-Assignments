// question 1

let array1 = [];

// question 2

let array2 = new Array();

// question 3

let array3 = ["Hello"];

// question 4

let array4 = [10];

// question 5

let array5 = [true];

// question 6

let array6 = ["Shadan", 18, true];

// question 7

let qualifications = ["SSc", "HSC", "BSc", "BS", "BCOM", "MS", "M.phil.", "PhD"];

console.log(qualifications);

// question 8

// pending because of loops

// question 9

let colors = ["Red", "Blue"];

let uesr1 = prompt("What color do you want to add in the beginning of array?");

colors.unshift(uesr1);

console.log("First Step: ");
console.log(colors);

let user2 = prompt("What color do you want to add in the end of array?");

colors.push(user2);

console.log("Second Step: ");
console.log(colors);

colors.unshift("Purple", "Green");

console.log("Third Step: ");
console.log(colors);

colors.shift();

console.log("Fourth Step: ");
console.log(colors);

colors.pop();

console.log("Fifth Step: ");
console.log(colors);
