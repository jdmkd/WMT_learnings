const employees = [
  { name: "Charlie", dept: "HR" },
  { name: "Bob", dept: "Engineering" },
  { name: "Alice", dept: "HR" },
];

const grouped = Object.groupBy(employees, (groupby) => groupby.dept);

console.log(grouped);

const newObj = Object.fromEntries(Object.entries(grouped));
console.log("newObj =>", newObj);

// console.log(employees.sort((a, b) => a.dept.localeCompare(b.dept)));
