const array = [1,2,3,4,5];
const cars = ["BMW", "Volvo", "Mini"];

console.log("Do While Loop ==>")
let x=0;

do{
    console.log(array[x]);
    x++;
}while(x < array.length)

console.log("for Array =>")
x=0;
do{
    console.log(cars[x]);
    x++;
}while(x < cars.length)