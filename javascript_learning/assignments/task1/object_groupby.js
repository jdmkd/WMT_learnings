const details = [
  { id: 1, name: "b", department: "management" },
  { id: 2, name: "a", department: "development" },
  { id: 3, name: "c", department: "development" },
  { id: 4, name: "c", department: "management" },
];

const grouped = Object.groupBy(details, (dep) => dep.department);

console.log(Object.fromEntries(Object.entries(grouped)));

// const cleanGrouped = Object.fromEntries(
//   Object.entries(grouped).map(([key, arr]) => [
//     key,
//     arr.map(({ department, ...rest }) => rest), // Remove 'department' using destructuring
//   ])
// );

// console.log(cleanGrouped);

// console.log(
//   Object.fromEntries(
//     Object.entries(Object.groupBy(details, (d) => d.department)).map(
//       ([k, v]) => [k, v.map(({ department, ...rest }) => rest)]
//     )
//   )
// );
