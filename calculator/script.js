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
  //Add a zero-width space to prevent the displayWindow from shrinking
  if (textContent.length === 0) {
    displayWindow.textContent = "0";
  } else {
    displayWindow.textContent = textContent;
  }
}

function appendDigit(digit) {
  currentNumber += digit;
  setDisplayWindow(
    currentNumber % 1 === 0 ? currentNumber : (+currentNumber).toFixed(2)
  );
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
    clear();
    setDisplayWindow("Invalid input");
    return;
  } else if (numbersLen > 1) {
    output = numberList[0];
    for (let i = 1; i < numbersLen; i++) {
      output = operate(
        operations.get(operationList[i - 1]),
        output,
        numberList[i]
      );
    }
  } else {
    output = currentNumber;
  }
  clear();
  appendDigit(output);
}

function operate(operator, a, b) {
  return math[operator](+a, +b);
}
