const arr = [1, 2, 3, 1, 4, 4, 6, 7, 8, 9, 8, 8, 9];

const grouped = Object.groupBy(arr, (x) => x);
const freq = {};

for (const key in grouped) {
  freq[key] = grouped[key].length;
}
console.log(freq);
