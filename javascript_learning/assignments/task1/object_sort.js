const details = [
  { id: 1, name: "b" },
  { id: 2, name: "a" },
];
// console.log(details.sort((a, b) => a.name.localeCompare(b.name)));

const cities = ["Zod city", "New Delhi", "Mumbai", "Berlin","Ahmedabad"];

cities.sort((a, b) => a.localeCompare(b));
console.log(cities);
