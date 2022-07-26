const removeFromArray = function () {
  let args = Array.from(arguments);
  const original = args.shift();
  let newArray = [];

  for (let i = 0; i < original.length; i++) {
    let element = original[i];
    for (let j = 0; j < args.length; j++) {
      if (element === args[j]) {
        j = args.length;
      } else if (j === args.length - 1) {
        newArray.push(element);
      }
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
