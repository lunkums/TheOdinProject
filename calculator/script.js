const displayWindow = document.querySelector("#display");
const digitButtons = document.querySelectorAll("#digit");
const operationButtons = document.querySelectorAll("#operation");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");
const deleteButton = document.querySelector("#delete-button");

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

const keyTypes = new Map([
  ["+", "operator"],
  ["-", "operator"],
  ["*", "operator"],
  ["/", "operator"],
  ["=", "evaluate"],
  ["Enter", "evaluate"],
  ["Backspace", "delete"],
  ["Delete", "delete"],
]);

window.addEventListener("click", debug);

window.addEventListener("load", clear);
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", evaluate);
deleteButton.addEventListener("click", deleteDigit);
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => setOperation(e.target.textContent));
});
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendDigit(e.target.textContent));
});

/* Add keyboard support */
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  const key = e.key;
  const keyType = keyTypes.get(key);
  if (!Number.isNaN(+key)) {
    appendDigit(key);
    return;
  }

  switch (keyType) {
    case "operator":
      setOperation(key);
      break;
    case "evaluate":
      evaluate();
      break;
    case "delete":
      deleteDigit();
      break;
    default:
      break;
  }
});

function setDisplayWindow(number) {
  const castedNumber = +number;
  const stringCastedNum = castedNumber.toString();

  if (numberOfDigits(stringCastedNum) < 9) {
    displayWindow.textContent = number;
  } else {
    displayWindow.textContent = castedNumber.toPrecision(9);
  }
}

function clear() {
  lastNumber = null;
  resetCurrentNumber();
  operation = null;
  setDisplayWindow(currentNumber);
}

function appendDigit(digit) {
  if (isEmpty(currentNumber) || (currentNumber === "0" && digit !== ".")) {
    currentNumber = digit;
  } else {
    currentNumber += digit;
  }
  setDisplayWindow(currentNumber);
}

function deleteDigit() {
  currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  if (isEmpty(currentNumber)) {
    resetCurrentNumber();
  }
  setDisplayWindow(currentNumber);
}

function setOperation(operator) {
  const previousOperation = operation;

  if (previousOperation && !isEmpty(currentNumber)) {
    evaluate();
  }

  operation = operations.get(operator);

  if (!isEmpty(currentNumber)) {
    lastNumber = +currentNumber;
    resetCurrentNumber();
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
    currentNumber = operate(operation, lastNumber, currentNumber).toString();
    lastNumber = "";
    operation = null;
    setDisplayWindow(currentNumber);
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

/* Helper methods */

function resetCurrentNumber() {
  currentNumber = "0";
}

function isEmpty(number) {
  return number === "";
}

function numberOfDigits(numberAsString) {
  return numberAsString.replace(/[^0-9]/g, "").length;
}
