// question 1

for (i = 0; i <= 10; i++) {
    console.log(i);
}

// question 2

for (i = 1; i <= 10; i++) {
    console.log(i * 2);
}

// question 3

for (i = 1; i <= 15; i += 2) {
    console.log(i);
}

// question 4

// skipping question 4 b/c factorial

// question 5

for (i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${i * 7}`);
}

// question6

// skipping b/c of fibionacci series 

// question 7

// skipping

// question 8

// skipping

// question 9

for (i = 1; i <= 10; i++) {
    console.log(`square of ${i} = ${i ** 2}`);
}

// question 10

let arr = [3, 32, 7, 2, 91, 9, 5, 12, 58, 84, 1114, 52220, 4520, 1288, 451];
let largest = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("The largest number is " + largest);