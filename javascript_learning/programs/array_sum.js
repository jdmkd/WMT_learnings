const arraySum = (numbers) => {
  let sum = 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }

  // for (let item in numbers) {
  //   sum += numbers[item];
  // }

  // for (let item of numbers) {
  //   sum += item;
  // }

  // numbers.filter((x) => (sum += x));
  numbers.map((x) => (sum += x));

  return sum;
};

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arraySum(numbers));
