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

// declare function that populates the display
function populateDisplay(button) {
    // console.log(typeof button.id);
    // console.log(button.textContent)
    switch (button.id) {
        case "btnNum1":
        case "btnNum2":
        case "btnNum3":
        case "btnNum4":
        case "btnNum5":
        case "btnNum6":
        case "btnNum7":
        case "btnNum8":
        case "btnNum9":
        case "btnNum0":
            console.log(button.id);
            display.textContent = "";
            display.textContent = button.textContent;
            break;
        case "btnAdd":
        case "btnSubtract":
        case "btnMultiply":
        case "btnDivide":
            // something with the operator
            console.log(button.id)
            break;
        case "btnDot":
            // add dot
            console.log(button.id)
            break;
        case "btnEquals":
            // calculate
            console.log(button.id)
            break;
        case "btnClear":
            // clear
            console.log(button.id)
            break;
        case "btnDelete":
            // delete
            console.log(button.id)
            break;
        default:
            console.log("Invalid button ID");
            break;
    }
}

// variables for two numbers and operator
operator = "";
a = 7;
b = 5;

// select all the buttons with the class name "btn"
const buttons = document.querySelectorAll(".btn");

// select display
const display = document.querySelector("#display");

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("You clicked a button");
    populateDisplay(button);
  });
});