let hello = () => console.log("hello");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myFunction() {
  console.log("Start!!!");

  await delay(3000);
  hello();

  console.log("End!!!");
}

console.log("Calling myFunction()");
myFunction();
