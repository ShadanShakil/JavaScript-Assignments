// random password generator

function generatePassword(length = 10) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    
    const allCharacters = lowercaseLetters + uppercaseLetters + digits;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Generate and print password
const password = generatePassword();
document.write("<h1>Password Generator:</h1>")
document.write("Generated Password:", password);


// word reverser

function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

const sentence = prompt("Enter a sentence:");
const reversedSentence = reverseWords(sentence);
document.write('<h1>Word Reverser</h1>');
document.write("Reversed Sentence:", reversedSentence);

// word Capitalizer

function capitalizeFirstLetter(sentence1) {
    const words = sentence1.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
}

const sentence1 = prompt("Enter a sentence1:");
const capitalizedSentence = capitalizeFirstLetter(sentence1);
document.write("<h1>Word Capitalizer:</h1>")
document.write("Capitalized Sentence:", capitalizedSentence);


// word finder

function findWord(sentence2, word) {
    const words = sentence2.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return "Word found";
        }
    }
    return "Word not found";
}

const inputSentence = prompt("Enter a sentence2:");
const inputWord = prompt("Enter a word to find:");

const result = findWord(inputSentence, inputWord);
document.write("<h1>Word Finder:</h1>")
document.write(result);


// string concatenation

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const fullName = firstName + " " + lastName;
document.write("<h1>String Concatenation</h1>")
document.write("Full Name:", fullName);
