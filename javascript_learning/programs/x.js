const data = [
  { a: 4, b: 12, c: 86, d: 25 },
  { a: 14, b: 32, c: 16, d: 67 },
  { a: 45, b: 82, c: 15, d: 90 },
  { a: 43, b: 16, c: 56, d: 20 },
  { a: 48, b: 15, c: 56, d: 60 },
  { a: 49, b: 42, c: 86, d: 30 },
];
const filterBy = ["a", "c"];
const search = "15";

let n = data.filter((item) =>
  filterBy.some((some) => {
    console.log("some ==>", item[some]);
    if (item[some]) {
      return item[some]
        .toString()
        .toLowerCase()
        .includes(Number(search.toLowerCase().trim()));
    }
    return false;
  })
);
console.log("value ::", n);

// console.log(n);
