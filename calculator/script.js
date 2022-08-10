const displayWindow = document.querySelector("#display");
const digitButtons = document.querySelectorAll("#digit");
const operationButtons = document.querySelectorAll("#operation");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");

let lastNumber;
let currentNumber;
let operation;

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

window.addEventListener("click", debug);

window.addEventListener("load", clear);
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", evaluate);
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => setOperation(e.target.textContent));
});
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendDigit(e.target.textContent));
});

function setDisplayWindow(number) {
  const castedNumber = +number;
  const stringCastedNum = castedNumber.toString();

  if (stringCastedNum.length === 0) {
    displayWindow.textContent = "0";
  } else if (stringCastedNum.length < 9) {
    displayWindow.textContent = castedNumber;
  } else {
    displayWindow.textContent = castedNumber.toPrecision(9);
  }
}

function clear() {
  lastNumber = null;
  currentNumber = "";
  operation = null;
  setDisplayWindow(currentNumber);
}

function appendDigit(digit) {
  currentNumber += digit;
  setDisplayWindow(currentNumber);
}

function setOperation(operator) {
  const previousOperation = operation;

  if (previousOperation && currentNumber !== "") {
    evaluate();
  }

  operation = operations.get(operator);

  if (currentNumber !== "") {
    lastNumber = +currentNumber;
    currentNumber = "";
  }
}

function evaluate() {
  if (!operation) return;

  if (currentNumber.length === 0) {
    currentNumber = lastNumber;
  }

  if (+currentNumber === 0 && operation === "divide") {
    clear();
    displayWindow.textContent = "nope.";
  } else {
    lastNumber = +operate(operation, lastNumber, currentNumber);
    currentNumber = "";
    operation = null;
    setDisplayWindow(lastNumber);
  }
}

function operate(operation, a, b) {
  return math[operation](+a, +b);
}

function debug() {
  console.log(
    `lastNumber : ${lastNumber}
currentNumber : "${currentNumber}"
operation : ${operation}`
  );
}
