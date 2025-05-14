const maxDepth = (nestedArray) => {
  if (!Array.isArray(nestedArray)) return 0;

  let depth = 1;

  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      depth = Math.max(depth, 1 + maxDepth(item));
    }
  }

  return depth;
};

console.log(maxDepth([1, [2, 3], [4, [5, 6], [7, [8, [9, 10]]]], 11]));
