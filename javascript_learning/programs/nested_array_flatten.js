// Write a function that returns a new flat array with all nested values included.

let flatten_array = [];

const flatten = (nestedArray) => {
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flatten(nestedArray[i]);
    } else {
      flatten_array.push(nestedArray[i]);
    }
  }
  return flatten_array;
};

const nestedArray = [1, [2, 3], [4, [5, 6], [7, [8, [9, 10]]]], 11];
console.log("nested array =>", nestedArray);
console.log(flatten(nestedArray));
