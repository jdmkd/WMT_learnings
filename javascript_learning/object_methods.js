const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let array_list_object = Object.entries(person);
console.log("all data in key/value pairs of an object in a new array =>");
console.log(array_list_object);

let array_keys = Object.keys(person);
console.log("all keys of object in a new array =>");
console.log(array_keys);

let array_values = Object.values(person);
console.log("all values of object in a new array =>");
console.log(array_values);

let seal_obj = Object.seal(person);
console.log(seal_obj);

// Returns true if object is sealed
let isSealed_obj = Object.isSealed(person);
console.log(isSealed_obj);

// Prevents any changes to an object
let freeze_obj = Object.freeze(person);
console.log(freeze_obj);

// Returns true if object is frozen
let isFrozen_obj = Object.isFrozen(person);
console.log(isFrozen_obj);
