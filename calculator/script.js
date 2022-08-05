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
