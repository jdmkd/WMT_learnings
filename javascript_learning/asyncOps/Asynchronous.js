let hello = () => console.log("hello");
console.log("Before setTimeout!!");

setTimeout(hello, 2000);
setTimeout(hello, 3000);

console.log("After setTimeout!!");
