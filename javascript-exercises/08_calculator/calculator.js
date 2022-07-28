const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function (nums) {
  let product = 1;
  for (const num of nums) {
    product *= num;
  }
  return product;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
