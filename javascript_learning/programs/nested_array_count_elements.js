// Write a function that counts how many values exist in the nested array.

const nestedArrayCountElements = (nestedArray) => {
  let count = 0;
  for (let ele in nestedArray) {
    console.log("ele =>", nestedArray[ele]);

    if (Array.isArray(nestedArray[ele])) {
      count += nestedArrayCountElements(nestedArray[ele]);
    } else {
      count++;
    }
  }
  return count;
};

const nestedArray = [100, [200, 3], [4, [5, 6], [7, [8, [9, 10]]]], 11];
console.log("nested array =>", nestedArray);
console.log(nestedArrayCountElements(nestedArray));
