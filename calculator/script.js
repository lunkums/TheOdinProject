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
equalButton.addEventListener("click", clear);
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => setOperator(e.target.textContent));
});
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendDigit(e.target.textContent));
});

function setDisplayWindow() {
  const castedCurrentNum = +currentNumber;
  const stringCastedNum = castedCurrentNum.toString();
  if (stringCastedNum.length === 0) {
    displayWindow.textContent = "0";
  } else if (stringCastedNum.length < 9) {
    displayWindow.textContent = castedCurrentNum;
  } else {
    displayWindow.textContent = castedCurrentNum.toPrecision(9);
  }
}

function clear() {
  currentNumber = "";
  setDisplayWindow();
  numberList = [];
  operationList = [];
}

function appendDigit(digit) {
  currentNumber += digit;
  setDisplayWindow();
}

function operate(operator, a, b) {
  return math[operator](+a, +b);
}
