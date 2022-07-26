const fibonacci = function (index) {
  if (index < 1) {
    return "OOPS";
  }

  let fibonacciNumbers = [1, 1];

  for (let i = 2; i < index; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
  }
  return fibonacciNumbers[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
