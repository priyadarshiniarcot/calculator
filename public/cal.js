// Initialize the Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// Function to update the display
function updateDisplay(value) {
  document.getElementById("display").textContent = value;
}

// Define Functionality for Number Buttons
let numButtons = document.getElementsByClassName("numButton");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function() {
    if(operator === "") {
      firstNumber += this.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += this.textContent;
      updateDisplay(secondNumber);
    }
  });
}

// Define Functionality for Operator Buttons
let opButtons = document.getElementsByClassName("opButton");
for (let i = 0; i < opButtons.length; i++) {
  opButtons[i].addEventListener("click", function() {
    operator = this.textContent;
  });
}

// Implement the Equals Button
let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click", function() {
  if (operator !== "" && secondNumber !== "") {
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
  }
});

// Implement the Clear Button
let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", function() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  updateDisplay("");
});

// Basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    return 'Error! Division by zero is undefined';
  } else {
    return a / b;
  }
}

// Perform the operation based on the operator
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}
