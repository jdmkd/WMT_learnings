// Reverse a String:
// Write a function to reverse a string without using the built-in reverse() method.

const strToArray = (str) => {
  let strArr = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word) {
        strArr.push(word);
      }
      word = "";
    } else {
      word += str[i];
    }
  }

  if (word) {
    strArr.push(word);
  }
  return strArr;
};

const reverseStr = (str) => {
  let strArr = strToArray(str);
  let reversedArr = [];
  for (let i = 0; i < strArr.length; i++) {
    reversedArr.push(strArr[strArr.length - 1 - i]);
  }

  return reversedArr;
};

const str = "hello this is a string";
console.log("original string =>", str);
console.log(reverseStr(str));
