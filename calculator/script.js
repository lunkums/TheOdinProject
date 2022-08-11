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
  button.addEventListener("click", (e) =>
    setOperation(e.target.textContent, button)
  );
});
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendDigit(e.target.textContent));
});

/* Add keyboard support */
window.addEventListener("keydown", (e) => {
  const key = e.key;
  const keyType = keyTypes.get(key);
  if (key === "Enter") {
    e.preventDefault();
  }
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

/* Main calculator functionality */

function clear() {
  lastNumber = null;
  resetCurrentNumber();
  resetOperation();
  setDisplayWindow(currentNumber);
}

function evaluate() {
  if (!operation) return;

  if (isEmpty(currentNumber)) {
    currentNumber = lastNumber;
  }

  if (+currentNumber === 0 && operation === "divide") {
    clear();
    displayWindow.textContent = "nope.";
  } else {
    currentNumber = operate(operation, lastNumber, currentNumber).toString();
    lastNumber = "";
    resetOperation();
    setDisplayWindow(currentNumber);
  }
}

function operate(operation, a, b) {
  return math[operation](+a, +b);
}

/* Setters */

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

function resetCurrentNumber() {
  currentNumber = "0";
}

function resetOperation() {
  operation = null;
  setActiveButton(null);
}

function setActiveButton(activeButton) {
  for (const button of operationButtons) {
    if (button === activeButton) {
      activeButton.classList.add("active-button");
    } else {
      button.classList.remove("active-button");
    }
  }
}

function setDisplayWindow(number) {
  const castedNumber = +number;
  const stringCastedNum = castedNumber.toString();

  if (numberOfDigits(stringCastedNum) < 9) {
    displayWindow.textContent = number;
  } else {
    displayWindow.textContent = castedNumber.toPrecision(9);
  }
}

function setLastNumber(number) {
  lastNumber = +number;
  if (isNaN(lastNumber)) {
    lastNumber = 0;
  }
}

function setOperation(operator, button) {
  const previousOperation = operation;

  if (previousOperation && !isEmpty(currentNumber)) {
    evaluate();
  }

  operation = operations.get(operator);
  setActiveButton(button);

  if (!isEmpty(currentNumber)) {
    setLastNumber(currentNumber);
    resetCurrentNumber();
  }
}

/* Helper methods */

function isEmpty(number) {
  return number === "";
}

function numberOfDigits(numberAsString) {
  return numberAsString.replace(/[^0-9]/g, "").length;
}

function debug() {
  console.log(
    `lastNumber : ${lastNumber}
currentNumber : "${currentNumber}"
operation : ${operation}`
  );
}
