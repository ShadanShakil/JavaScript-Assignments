

document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitInput = document.getElementById('unitInput').value;
    const unitOutput = document.getElementById('unitOutput').value;

    if (isNaN(tempInput)) {
        alert('Please enter a valid number.');
        return;
    }

    let convertedTemp;

    switch (unitInput) {
        case 'Celsius':
            if (unitOutput === 'Fahrenheit') {
                convertedTemp = (tempInput * 9 / 5) + 32;
            } else if (unitOutput === 'Kelvin') {
                convertedTemp = tempInput + 273.15;
            } else {
                convertedTemp = tempInput;
            }
            break;
        case 'Fahrenheit':
            if (unitOutput === 'Celsius') {
                convertedTemp = (tempInput - 32) * 5 / 9;
            } else if (unitOutput === 'Kelvin') {
                convertedTemp = ((tempInput - 32) * 5 / 9) + 273.15;
            } else {
                convertedTemp = tempInput;
            }
            break;
        case 'Kelvin':
            if (unitOutput === 'Celsius') {
                convertedTemp = tempInput - 273.15;
            } else if (unitOutput === 'Fahrenheit') {
                convertedTemp = ((tempInput - 273.15) * 9 / 5) + 32;
            } else {
                convertedTemp = tempInput;
            }
            break;
    }

    displayResult(convertedTemp, unitOutput);
}

function displayResult(value, unit) {
    document.getElementById('outputValue').textContent = `${value.toFixed(2)} ${unit}`;
}


