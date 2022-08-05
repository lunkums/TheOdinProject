const displayWindow = document.querySelector("#display");
const clearButton = document.querySelector("#clear-button");

let firstNumber;
let secondNumber;

window.addEventListener("load", clear);
clearButton.addEventListener("click", clear);

function clear() {
  displayWindow.textContent = "";
  firstNumber = "";
  secondNumber = "";
}

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

function operate(operator, a, b) {
  if (operator in math) {
    return math[operator](a, b);
  }
  return "Invalid operation";
}
