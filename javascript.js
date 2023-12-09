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
function operate(operator, a, b) {
    if (operator === "add") return operationAdd(a, b);
    if (operator === "subtract") return operationSubtract(a, b);
    if (operator === "multiply") return operationMultiply(a, b);
    if (operator === "divide") return operationDivide(a, b);
}

// declare function that populates the display, sets the flags, and calls the operator function according to flags
function populateDisplay(button) {
    // console.log(typeof button.id);
    console.log(button.id)
    /* check the flag conditions and update display
        according to the buttons pressed */
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
            // if no buttons pressed yet, save number and update flag for number 1
            if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    flagNumber1 = true;
                    number1 = Number(button.textContent);
                    display.textContent = number1;
                    printEverything();
                    break;
                }
            // if number1 is pressed again with no operator yet, expand number1, flags stay the same
            if (flagNumber1 === true
                && flagOperator === false
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    flagNumber1 = true;
                    number1 = Number(String(number1) + button.textContent);
                    display.textContent = number1;
                    printEverything();
                    break;
                }
            // number is pressed with number1 and operator flag true, set flag for number2 true and update display
            if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    flagNumber2 = true;
                    number2 = Number(button.textContent);
                    display.textContent = number2;
                    printEverything();
                    break;
                }
            // if number is pressed with flags number1, operator and number2 true, expand number2 and update display
            if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === false) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                    printEverything();
                    break;
                }
            if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === true) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                    printEverything();
                    break;
                }
            // save next number for chained operation
            if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === false
                && flagPrevCalc === true) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                    number1 = result;
                    printEverything();
                    break;
                }
        case "btnAdd":
        case "btnSubtract":
        case "btnMultiply":
        case "btnDivide":
            // if no numbers have been pressed yet, do nothing
            if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    printEverything();
                    break;
                }
            // if number1 has been pressed already, save operator and set operator flag to true
            if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    flagOperator = true;
                    // console.log(button.id);
                    // console.log(operator);
                    if (button.id === "btnAdd") {
                        // console.log(button.id);
                        // console.log(typeof button.id);
                        // console.log("heelo");
                        operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    // console.log(operator);
                    printEverything();
                    break;
                }
            // if press operator for a second time, update it to the new one, flags stay the same
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false
                && flagPrevCalc === false) {
                    flagOperator = true;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    printEverything();
                    break;
                }
            // if chained operation, accept a new operator 
            if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false
                && flagPrevCalc === true) {
                    flagOperator = true;
                    number2 = 0;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    printEverything();
                    break;
                }
            // if chained operator, change to the new operator if button is pressed several times
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false
                && flagPrevCalc === true) {
                    flagOperator = true;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    printEverything();
                    break;
                }
            // if operator pressed again in chained operation, display result, save result as number1, set flag for number2 to false
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === true) {
                    flagNumber2 = false;
                    number1 = result;
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number2 = 0;
                    number1 = result;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    printEverything();
                    break;
                }
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === false) {
                    flagNumber2 = false;
                    flagPrevCalc = true;
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number1 = result;
                    number2 = 0;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    printEverything();
                    break;
                }
        case "btnDot":
            // add dot
            // console.log(button.id)
            break;
        case "btnEquals":
            // calculate
            // console.log(button.id)
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === false) {
                    flagNumber1 = true;
                    flagOperator = false;
                    flagNumber2 = false;
                    flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    printEverything();
                    break;
                }
            // if press equal during chained operation
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true
                && flagPrevCalc === true) {
                    flagNumber1 = true;
                    flagOperator = false;
                    flagNumber2 = false;
                    flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    printEverything();
                    break;
                }
            if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagNumber1 = true;
                    flagOperator = false;
                    flagNumber2 = false;
                    flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = number1;
                    display.textContent = result;
                    printEverything();
                    break;
                }
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false) {
                    flagNumber1 = true;
                    flagOperator = true;
                    flagNumber2 = false;
                    // call operate function, print result, reset flags
                    result = number1;
                    display.textContent = result;
                    printEverything();
                    break;
                }
            break;
        case "btnClear":
            // clear
            // console.log(button.id)
            break;
        case "btnDelete":
            // delete
            // console.log(button.id)
            break;
        default:
            console.log("Invalid button ID");
            break;
    }
}

function printEverything() {
    console.log("operator: " + operator);
    console.log("number1: " + number1);
    console.log("number2: " + number2);
    console.log("result: " + result);
    console.log("fNum1: " + flagNumber1);
    console.log("fOp: " + flagOperator);
    console.log("fNum2: " + flagNumber2);
    console.log("fPrevC: " + flagPrevCalc);
}

// variables for two numbers and operator
let operator = "";
let number1 = 0;
let number2 = 0;
let result = 0;

let flagNumber1 = false;
let flagOperator = false;
let flagNumber2 = false;
let flagPrevCalc = false;

// select all the buttons with the class name "btn"
const buttons = document.querySelectorAll(".btn");

// select display
const display = document.querySelector("#display");

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("--------------------");
    populateDisplay(button);
  });
});