const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.myFunction());


// function myFunction() {
//     return this;
// }
// console.log(myFunction());