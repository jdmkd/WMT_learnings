const fruits = ["Banana", "Apple", "Mango"];
let size = fruits.length;
console.log("Size of fruits array", size);
console.log("Original fruits array =>", fruits);

fruits.push("Kiwi");
console.log(
  "push() method adds a new element to an array (at the end) =>",
  fruits
);

let poped_ele = fruits.pop();
console.log(
  "pop() method removes the last element from an array =>",
  poped_ele
);

let fruit_at = fruits.at(2);
console.log(fruit_at);

let fruit_indexing = fruits[2];
console.log(fruit_indexing);

let fruit_join = fruits.join(" $ ");
console.log(fruit_join);

fruits[0] = "Kiwi";
fruits[fruits.length] = "Watermellon";

// splice() method adds new items to an array.
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("Original fruits array =>", fruits);

fruits.splice(0, 1);
console.log("Original fruits array =>", fruits);

// slice() method slices out a piece of an array into a new array

const slice_start = fruits.slice(1);

console.log("slice_start =>", slice_start);
console.log("Original fruits array =>", fruits);

const slice_start_end = fruits.slice(1, 3);
console.log("slice_start_end =>", slice_start_end);
console.log("Original fruits array =>", fruits);

console.log(fruits.includes("Mango"));
console.log(fruits.sort());
