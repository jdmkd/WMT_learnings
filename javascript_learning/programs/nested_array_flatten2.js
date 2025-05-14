const deepFlatten = (arr) => {
  const flatten = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nested = deepFlatten(arr[i]);

      for (let j = 0; j < nested.length; j++) {
        flatten.push(nested[j]);
      }
    } else {
      flatten.push(arr[i]);
    }
  }

  return flatten;
};
