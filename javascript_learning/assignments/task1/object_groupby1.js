const details = [
  { id: 1, name: "b", department: "management" },
  { id: 2, name: "a", department: "development" },
  { id: 3, name: "c", department: "development" },
];

let sorted_dep = {};

for (let i = 0; i < details.length; i++) {
  const { department, ...rest } = details[i];

  if (!sorted_dep[department]) {
    sorted_dep[department] = [];
  }

  sorted_dep[department].push(rest);
}

console.log(sorted_dep);
