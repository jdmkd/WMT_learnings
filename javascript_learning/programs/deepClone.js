function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepClone(value[i]);
    }
    return result;
  }

  const result = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}


const original = {
  name: "Alice",
  meta: {
    age: 30,
    scores: [1, 2, { math: 99 }]
  }
};

const cloned = deepClone(original);
cloned.meta.age = 99;
cloned.meta.scores[2].math = 0;

console.log("Original:", original);
console.log("Cloned:", cloned);
