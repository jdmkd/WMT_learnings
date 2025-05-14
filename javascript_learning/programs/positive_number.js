numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPositive = (numbers) => {
  let even = [];
  // for (let i = 0; i <= numbers.length - 1; i++) {
  //   if (numbers[i] % 2 == 0) {
  //     posNumbers.push(numbers[i]);
  //   }
  // }
  // even = numbers.filter((x) => x % 2 == 0);
  even = numbers.map((x) => x % 2 == 0);

  return even;
};

console.log(findPositive(numbers));
