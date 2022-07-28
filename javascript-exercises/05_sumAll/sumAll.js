const sumAll = function (num1, num2) {
  if (!isPositiveNumber(num1) || !isPositiveNumber(num2)) {
    return "ERROR";
  }

  let sum = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i;
  }
  return sum;
};

function isPositiveNumber(num) {
  return Number.isFinite(num) && num >= 0;
}

// Do not edit below this line
module.exports = sumAll;
