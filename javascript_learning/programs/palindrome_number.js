// const isPelindrom = (num) => {
//   let str = num.toString();
//   const reversed = str.split("").reverse().join("");

//   return str === reversed;
// };

const isPelindrom = (num) => {
  let orgNum = num;
  let str = num.toString();
  // const reversed = str.split("").reverse().join("");
  // console.log(str.length)
  let numArr = [];
  for (let i = 0; i < str.length; i++) {
    const rem = num % 10;
    const digit = num / 10;
    num = digit;
    numArr.push(Math.floor(rem));
  }

  return orgNum === Number(numArr.join(""));
};

const num = 12332;
console.log("original number =>", num);
console.log("isPelindrom =>", isPelindrom(num));
