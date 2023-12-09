// declare four functions for four basic math operations
function operationAdd (a, b) {
    return a + b;
}

function operationSubtract (a, b) {
    return a - b;
}

function operationMultiply (a, b) {
    return a * b;
}

function operationDivide (a, b) {
    if (b === 0) {
        return "You can't divide by zero!"
    } else {
        return a / b;
    }
}

// declare function that calls one of the basic four math operations
function operate (operator, a, b) {
    if (operator === add) operationAdd(a, b);
    if (operator === subtract) operationSubtract(a, b);
    if (operator === multiply) operationMultiply(a, b);
    if (operator === divide) operationDivide(a, b);
}

// variables for two numbers and operator
operator = "";
a = 7;
b = 5;

// select all the buttons with the class name "btn"
const buttons = document.querySelectorAll(".btn");

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // populateDisplay();
    console.log("You clicked a button");
    console.log(button);
  });
});