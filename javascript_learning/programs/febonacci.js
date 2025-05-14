const fibo = (n) => {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
};

const generatFibo = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibo(i));
  }

  return result;
};
console.log(generatFibo(10));
