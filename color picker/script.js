function updateColor() {
    const redInput = document.getElementById("red").value;
    const greenInput = document.getElementById("green").value;
    const blueInput = document.getElementById("blue").value;

    const isValid = validateInput(redInput, greenInput, blueInput);
    if (isValid) {
        const rgbColor = createRGBColor(redInput, greenInput, blueInput);
        setColor(rgbColor);
    } else {
        alert("Invalid RGB values. Please enter values between 0 and 255.");
    }
}

function validateInput(red, green, blue) {
    return red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255;
}

function createRGBColor(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
}

function setColor(color) {
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = color;
}
