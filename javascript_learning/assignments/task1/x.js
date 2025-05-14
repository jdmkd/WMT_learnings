const details = [
  { id: 1, name: "b", department: "management" },
  { id: 2, name: "a", department: "development" },
  { id: 3, name: "c", department: "development" },
];

const grouped = {};
for (let i = 0; i < details.length; i++) {
  const dept = details[i].department;
  if (!grouped[dept]) {
    grouped[dept] = [];
  }
  grouped[dept].push(details[i]);
}


console.log(grouped);