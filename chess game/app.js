const secretNumber = Math.floor(Math.random() * 6) + 1;

function playGame(guess) {
    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the secret number on the first try.");
        return 6;
    } else {
        console.log("Sorry, that's not correct. Try again.");
        const secondGuess = prompt("Guess again (between 1 and 6):");
        if (secondGuess == secretNumber) {
            console.log("Congratulations! You guessed the secret number on your second try.");
            return 3;
        } else {
            console.log("Sorry, you failed to guess the secret number.");
            return 0;
        }
    }
}

const userGuess = +(prompt("Guess the secret number (between 1 and 6):"));

const score = playGame(userGuess);
console.log("Your score is: " + score);
