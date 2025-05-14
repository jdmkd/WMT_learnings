const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return n > 1;
};

const printPrime = (n) => {
  let i = 1;
  for (i; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  return i;
};

console.log("printPrime =>", printPrime(7));
