const arr = [1, 2, 3, 1, 4, 4, 6, 7, 8, 9, 8, 8, 99];

const frequency = {};

for (let i = 0; i < arr.length; i++) {
  // const num = arr[i];
  if (frequency[arr[i]]) {
    frequency[arr[i]]++;
  } else frequency[arr[i]] = 1;
}

console.log(frequency);


