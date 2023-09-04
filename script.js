document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", convertTemperature);
});

function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temp").value);
    const unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(temperature)) {
        result = "Please enter a valid number";
    } else {
        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            result = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
        } else if (unit === "kelvin") {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            result = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
        }
    }

    document.getElementById("result").textContent = result;
}
