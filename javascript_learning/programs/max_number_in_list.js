const findMax = (...args) => {
  let max_value = args[0];
  console.log("list of numbers => ", args);

  ///// using for...in loop
  for (let arg in args) {
    if (args[arg] > max_value) {
        max_value = args[arg];
    }
  }
  

  ///// using simple for loop
  // for(let i=0; i<=args.length -1; i++) {
  //     // console.log(args[i])
  //     if (args[i] > max_value) {
  //         console.log(args[i],">",max_value);
  //         max_value = args[i];
  //     }

  //     console.log(args[i],"<=",max_value);
  // }
  return max_value;
};

const x = findMax(1, 123, 500, 115, 44, 88);
console.log("max value is => ", x);
