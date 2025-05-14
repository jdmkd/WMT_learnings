const str = "hello this is a string";

// const reversedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log("reversedStr =>", reversedStr);

const strArr = str.split(" ");

for (let i = 0; i < strArr.length; i++) {
  strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
}
console.log(strArr.join(" "));
