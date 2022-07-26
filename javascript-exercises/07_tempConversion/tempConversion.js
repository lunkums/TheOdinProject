const ftoc = function (fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function (celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
