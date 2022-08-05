const displayWindow = document.querySelector("#display");
const digitButtons = document.querySelectorAll("#digit");
const operationButtons = document.querySelectorAll("#operation");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");

let currentNumber;
let numberList;
let operationList;

const math = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

const operations = new Map([
  ["+", "add"],
  ["-", "subtract"],
  ["*", "multiply"],
  ["/", "divide"],
]);

window.addEventListener("load", clear);
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", evaluate);
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => setOperator(e.target.textContent));
});
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendDigit(e.target.textContent));
});

function setDisplayWindow(textContent) {
  displayWindow.textContent = textContent;
}

function appendDigit(digit) {
  currentNumber += digit;
  setDisplayWindow(currentNumber);
}

function setOperator(operator) {
  numberList.push(currentNumber);
  currentNumber = "";
  operationList.push(operator);
  setDisplayWindow(operator);
}

function clear() {
  setDisplayWindow("");
  currentNumber = "";
  numberList = [];
  operationList = [];
}

function evaluate() {
  let output;
  if (currentNumber.length > 0) numberList.push(currentNumber);
  const numbersLen = numberList.length;
  const operationsLen = operationList.length;
  if (operationsLen >= numbersLen) {
    output = "Invalid input";
  } else if (numbersLen > 1) {
    output = operate("", "", "");
  } else {
    output = currentNumber;
  }
  clear();
  setDisplayWindow(output);
}

function operate(operator, a, b) {
  return `Numbers : ${numberList}, Operations : ${operationList}`;
}
