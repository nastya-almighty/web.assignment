let celcius = parseFloat(prompt("Введите температуру в градусах по Цельсию"));

function Fahrenheit(c) {
    f = (9 / 5) * c + 32;
    return f.toFixed(2);
}

alert(`Температура по Фаренгейту: ${Fahrenheit(celcius)}`);