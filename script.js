document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature;
    let unit;

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (unitSelect === 'celsius') {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        unit = 'Fahrenheit';
    } else if (unitSelect === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        unit = 'Celsius';
    } else if (unitSelect === 'kelvin') {
        convertedTemperature = temperatureInput - 273.15;
        unit = 'Celsius';
    }

    document.getElementById('result').textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}
