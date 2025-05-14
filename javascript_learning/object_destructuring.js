const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

////// Using for loop
let key = Object.keys(person)
for(let i=0; i< key.length; i++){
    console.log(key[i], ":",person[key[i]]);
}

////// Using for...in loop
// for(const key in person){
//     console.log(key, ":",person[key]);
// }

////// Using for...of loop
// for(const [key] of Object.entries(person)){
//     console.log(key, ":",person[key]);
// }