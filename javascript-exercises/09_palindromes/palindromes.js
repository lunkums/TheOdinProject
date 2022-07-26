const palindromes = function (str) {
  const formatted = format(str);
  const length = formatted.length;
  for (let i = 0; i < length; i++) {
    if (formatted.charAt(i) !== formatted.charAt(length - (i + 1))) {
      return false;
    }
  }
  return true;
};

function format(str) {
  return str.replace(/[^a-z]/gi, "").toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
