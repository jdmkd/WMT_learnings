const nested = [1, [2, [3, [4, 5, [6, [7]]]]]];
const flat = nested.flat(Infinity);
console.log(flat);
