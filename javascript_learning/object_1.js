const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let keys = [];
let values = [];
for (let i in person){
    values.push(person[i])
    keys.push(i)
}
console.log(keys);
console.log(values);