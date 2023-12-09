function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return "You can't divide by zero!"
    } else {
        return a / b;
    }
}

a = 7;
b = 5;
operator = "";

alert(add(a, b));
alert(subtract(a, b));
alert(multiply(a, b));
alert(divide(a, b));