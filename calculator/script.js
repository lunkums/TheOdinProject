const displayWindow = document.querySelector("#display");
const clearButton = document.querySelector("#clear-button");
const operationButtons = document.querySelectorAll("#operation");

let firstNumber;
let operation;
let secondNumber;

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
operationButtons.forEach((button) => {
  button.addEventListener(
    "click",
    (e) => (operation = operations.get(e.target.textContent))
  );
});

function clear() {
  displayWindow.textContent = "";
  firstNumber = "";
  operation = "";
  secondNumber = "";
}

function operate(operator, a, b) {
  if (operator in math) {
    return math[operator](a, b);
  }
  return "Invalid operation";
}
