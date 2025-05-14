const groupBy = (employees) => {
  let item = [];
  let grouped = {};

  for (let i = 0; i < employees.length; i++) {
    item = employees[i];
    grouped[item.dept] = item;
    
  }

  return grouped;
};

const employees = [
  { name: "Charlie", dept: "HR" },
  { name: "Bob", dept: "Engineering" },
  { name: "Alice", dept: "HR" },
];

console.log("original =>", employees);
console.log("groupBy =>", groupBy(employees));
