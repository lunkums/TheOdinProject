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
  numberList.push(currentNumber);
  operate("", "", "");
}

function operate(operator, a, b) {
  setDisplayWindow(`Numbers : ${numberList}, Operations : ${operationList}`);
}
