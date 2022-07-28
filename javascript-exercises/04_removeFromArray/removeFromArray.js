const removeFromArray = function () {
  let args = Array.from(arguments);
  const original = args.shift();
  let adjusted = [];

  for (let i = 0; i < original.length; i++) {
    let element = original[i];

    if (!strictContains(args, element)) {
      adjusted.push(element);
    }
  }

  return adjusted;
};

function strictContains(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

// Do not edit below this line
module.exports = removeFromArray;
