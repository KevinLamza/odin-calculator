// declare four functions for four basic math operations
function operationAdd (a, b) {
    return roundToDecimal(roundToDecimal(a) + roundToDecimal(b));
}

function operationSubtract (a, b) {
    return roundToDecimal(roundToDecimal(a) - roundToDecimal(b));
}

function operationMultiply (a, b) {
    return roundToDecimal(roundToDecimal(a) * roundToDecimal(b));
}

function operationDivide (a, b) {
    if (b === 0) {
        clearEverything();
        divisionError = true;
        return "You can't divide by zero!"
    } else {
        return roundToDecimal(roundToDecimal(a) / roundToDecimal(b));
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
            if (divisionError === false) { 
            // if no buttons pressed yet, save number and update flag for number 1
            if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagNumber1 = true;
                    number1 = Number(button.textContent);
                    display.textContent = number1;
                }
            // if number1 is pressed again with no operator yet, expand number1, flags stay the same
            else if (flagNumber1 === true
                && flagOperator === false
                && flagNumber2 === false) {
                    flagNumber1 = true;
                    number1 = Number(String(number1) + button.textContent);
                    display.textContent = number1;
                }
            // number is pressed with number1 and operator flag true, set flag for number2 true and update display
            else if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === false) {
                    flagNumber2 = true;
                    number2 = Number(button.textContent);
                    display.textContent = number2;
                }
            // if number is pressed with flags number1, operator and number2 true, expand number2 and update display
            else if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                }
            else if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                }
            // save next number for chained operation
            else if (flagNumber1 === true
                && flagOperator === true
                && flagNumber2 === false) {
                    flagNumber2 = true;
                    number2 = Number(String(number2) + button.textContent);
                    display.textContent = number2;
                    number1 = result;
                }}         
            printEverything();
            break;
        case "btnAdd":
        case "btnSubtract":
        case "btnMultiply":
        case "btnDivide":
            if (divisionError === false) {
            // if no numbers have been pressed yet, do nothing
            if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagOperator = true;
                    flagNumber1 = true;
                    number1 = result;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }
            // if number1 has been pressed already, save operator and set operator flag to true
            else if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagOperator = true;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                    // console.log(operator);
                }
            else if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagNumber1 = true;
                    flagOperator = true;
                    number1 = result;
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
                }
            // if press operator for a second time, update it to the new one, flags stay the same
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false) {
                    flagOperator = true;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }
            // if chained operation, accept a new operator 
            else if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagOperator = true;
                    number2 = 0;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }
            // if chained operator, change to the new operator if button is pressed several times
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false) {
                    flagOperator = true;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }
            // if operator pressed again in chained operation, display result, save result as number1, set flag for number2 to false
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber2 = false;
                    // number1 = result;
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number2 = 0;
                    number1 = result;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber2 = false;
                    // flagPrevCalc = true;
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number1 = result;
                    number2 = 0;
                    if (button.id === "btnAdd") {operator = "add";}
                    else if (button.id === "btnSubtract") {operator = "subtract";}
                    else if (button.id === "btnMultiply") {operator = "multiply";}
                    else if (button.id === "btnDivide") {operator = "divide";}
                }}
                toggleDecimal = false;
                printEverything();
                break;
        case "btnDot":
            if (divisionError === false) {
            if (toggleDecimal === false) {
                if (flagNumber1 === false 
                    && flagOperator === false
                    && flagNumber2 === false) {
                        flagNumber1 = true;
                        number1 = "0.";
                        display.textContent = number1;
                    }
                else if (flagNumber1 === true
                    && flagOperator === false
                    && flagNumber2 === false) {
                        number1 = (String(number1) + ".")
                        display.textContent = number1;
                    }
                else if (flagNumber1 === true
                    && flagOperator === true
                    && flagNumber2 === false) {
                        flagNumber2 = true;
                        number2 = "0.";
                        display.textContent = number2;
                    }
                else if (flagNumber1 === true
                    && flagOperator === true
                    && flagNumber2 === true) {
                        number2 = (String(number2) + ".")
                        display.textContent = number2;
                    }}
            toggleDecimal = true;
            printEverything();
            }
            break;
        case "btnEquals":
            if (divisionError === false) {
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber1 = false;
                    flagOperator = false;
                    flagNumber2 = false;
                    // flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number1 = 0;
                    number2 = 0;
                }
            // if press equal during chained operation
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true) {
                    flagNumber1 = false;
                    flagOperator = false;
                    flagNumber2 = false;
                    // flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = operate(operator, number1, number2);
                    display.textContent = result;
                    number1 = 0;
                    number2 = 0;
                }
            // press equal button after entering num1
            else if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false) {
                    flagNumber1 = false;
                    flagOperator = false;
                    flagNumber2 = false;
                    // flagPrevCalc = true;
                    // call operate function, print result, reset flags
                    result = number1;
                    display.textContent = result;
                    number1 = 0;
                    number2 = 0;
                }
            // press equal button after entering operator
            else if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === false) {
                    flagNumber1 = false;
                    flagOperator = false;
                    flagNumber2 = false;
                    // call operate function, print result, reset flags
                    result = number1;
                    display.textContent = result;
                    number1 = 0;
                    number2 = 0;
                }}
                toggleDecimal = false;
            printEverything();
            break;
        case "btnClear":
            clearEverything();
            break;
        case "btnDelete":
            // delete
            if (flagNumber1 === true 
                && flagOperator === false
                && flagNumber2 === false) {
                    number1 = Number(String(number1).slice(0, -1));
                    display.textContent = number1;
                }
            if (flagNumber1 === true 
                && flagOperator === true
                && flagNumber2 === true) {
                    number2= Number(String(number2).slice(0, -1));
                    display.textContent = number2;
                }
            if (flagNumber1 === false 
                && flagOperator === false
                && flagNumber2 === false) {
                    result = Number(String(result).slice(0, -1));
                    if (result === 0) display.textContent = "";
                    else display.textContent = result;
                }
            printEverything();
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
    console.log("dot: " + toggleDecimal);
    console.log("result: " + result);
    console.log("fNum1: " + flagNumber1);
    console.log("fOp: " + flagOperator);
    console.log("fNum2: " + flagNumber2);
    // console.log("fPrevC: " + flagPrevCalc);
}

function roundToDecimal(number) {
    return Math.round(number * 1000000000) / 1000000000;
}

function clearEverything() {
    flagNumber1 = false;
    flagOperator = false;
    flagNumber2 = false;
    // flagPrevCalc = false;

    toggleDecimal = false;
    divisionError = false;
    
    number1 = 0;
    number2 = 0;
    operator = "";
    result = 0;
    display.textContent = "0";
    printEverything();
}

// variables for two numbers and operator
let operator = "";
let number1 = 0;
let number2 = 0;
let result = 0;

let toggleDecimal = false;
let divisionError = false;

let flagNumber1 = false;
let flagOperator = false;
let flagNumber2 = false;
// let flagPrevCalc = false;

// select all the buttons with the class name "btn"
const buttons = document.querySelectorAll(".btn");

// select display
const display = document.querySelector("#display");
display.textContent = "0";

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("--------------------");
    populateDisplay(button);
  });
});

document.addEventListener("keydown", (event) => {
      const keyName = event.key;
    //   if (event.key) {
    //     alert(`${keyName}`);
    //   } 
      if (keyName == "1") populateDisplay(btnNum1);
      if (keyName == "2") populateDisplay(btnNum2);
      if (keyName == "3") populateDisplay(btnNum3);
      if (keyName == "4") populateDisplay(btnNum4);
      if (keyName == "5") populateDisplay(btnNum5);
      if (keyName == "6") populateDisplay(btnNum6);
      if (keyName == "7") populateDisplay(btnNum7);
      if (keyName == "8") populateDisplay(btnNum8);
      if (keyName == "9") populateDisplay(btnNum9);
      if (keyName == "0") populateDisplay(btnNum0);
      if (keyName == "+") populateDisplay(btnAdd);
      if (keyName == "-") populateDisplay(btnSubtract);
      if (keyName == "*") populateDisplay(btnMultiply);
      if (keyName == "/") populateDisplay(btnDivide);
      if (keyName == ".") populateDisplay(btnDot);
      if (keyName == "Enter") populateDisplay(btnEquals);
      if (keyName == "c") populateDisplay(btnClear);
      if (keyName == "d") populateDisplay(btnDelete);
    },
    false,
  );
  
