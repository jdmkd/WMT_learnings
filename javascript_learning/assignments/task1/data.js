const people = [
  { id: 1, name: "Oscar1", age: 27 },
  { id: 2, name: "Laura2", age: 34 },
  { id: 3, name: "Tika3", age: 27 },
  { id: 4, name: "Nina4", age: 21 },
  { id: 5, name: "Alice5", age: 29 },
  { id: 6, name: "Uma6", age: 37 },
  { id: 7, name: "Bob7", age: 25 },
  { id: 8, name: "Laura8", age: 25 },
  { id: 9, name: "Paula9", age: 22 },
  { id: 10, name: "Nina10", age: 20 },
  { id: 11, name: "Victor11", age: 37 },
  { id: 12, name: "Hannah12", age: 29 },
  { id: 13, name: "Ethan13", age: 40 },
  { id: 14, name: "Ethan14", age: 39 },
  { id: 15, name: "Uma15", age: 22 },
  { id: 16, name: "Jenna16", age: 40 },
  { id: 17, name: "Hannah17", age: 28 },
  { id: 18, name: "Hannah18", age: 24 },
  { id: 19, name: "Xander19", age: 27 },
  { id: 20, name: "Hannah20", age: 31 },
  { id: 21, name: "Mike21", age: 28 },
  { id: 22, name: "Jenna22", age: 30 },
  { id: 23, name: "Ian23", age: 20 },
  { id: 24, name: "Victor24", age: 35 },
  { id: 25, name: "Alice25", age: 36 },
  { id: 26, name: "Ian26", age: 34 },
  { id: 27, name: "Quentin27", age: 38 },
  { id: 28, name: "Nina28", age: 37 },
  { id: 29, name: "Wendy29", age: 40 },
  { id: 30, name: "Wendy30", age: 31 },
  { id: 31, name: "Jenna31", age: 31 },
  { id: 32, name: "Laura32", age: 23 },
  { id: 33, name: "Uma33", age: 28 },
  { id: 34, name: "Diana34", age: 26 },
  { id: 35, name: "Bob35", age: 26 },
  { id: 36, name: "Fiona36", age: 29 },
  { id: 37, name: "Paula37", age: 31 },
  { id: 38, name: "George38", age: 36 },
  { id: 39, name: "Tika39", age: 22 },
  { id: 40, name: "Mike40", age: 40 },
  { id: 41, name: "Nina41", age: 22 },
  { id: 42, name: "Paula42", age: 32 },
  { id: 43, name: "Charlie43", age: 29 },
  { id: 44, name: "Victor44", age: 27 },
  { id: 45, name: "Charlie45", age: 29 },
  { id: 46, name: "Jenna46", age: 26 },
  { id: 47, name: "Paula47", age: 29 },
  { id: 48, name: "Oscar48", age: 27 },
  { id: 49, name: "Alice49", age: 31 },
  { id: 50, name: "Uma50", age: 34 },
  { id: 51, name: "Ian51", age: 26 },
  { id: 52, name: "Wendy52", age: 35 },
  { id: 53, name: "Oscar53", age: 39 },
  { id: 54, name: "Ian54", age: 25 },
  { id: 55, name: "Yara55", age: 23 },
  { id: 56, name: "Uma56", age: 38 },
  { id: 57, name: "Yara57", age: 33 },
  { id: 58, name: "George58", age: 27 },
  { id: 59, name: "Uma59", age: 37 },
  { id: 60, name: "Sam60", age: 36 },
  { id: 61, name: "Victor61", age: 34 },
  { id: 62, name: "Mike62", age: 21 },
  { id: 63, name: "Nina63", age: 34 },
  { id: 64, name: "Jenna64", age: 29 },
  { id: 65, name: "George65", age: 25 },
  { id: 66, name: "Jenna66", age: 34 },
  { id: 67, name: "Nina67", age: 38 },
  { id: 68, name: "Bob68", age: 38 },
  { id: 69, name: "Uma69", age: 23 },
  { id: 70, name: "Yara70", age: 26 },
  { id: 71, name: "Ian71", age: 20 },
  { id: 72, name: "Xander72", age: 38 },
  { id: 73, name: "Victor73", age: 20 },
  { id: 74, name: "Victor74", age: 26 },
  { id: 75, name: "Zane75", age: 20 },
  { id: 76, name: "Tina76", age: 22 },
  { id: 77, name: "Tika77", age: 33 },
  { id: 78, name: "Oscar78", age: 26 },
  { id: 79, name: "Mike79", age: 32 },
  { id: 80, name: "Tina80", age: 21 },
  { id: 81, name: "Hannah81", age: 33 },
  { id: 82, name: "Alice82", age: 20 },
  { id: 83, name: "Wendy83", age: 20 },
  { id: 84, name: "Oscar84", age: 37 },
  { id: 85, name: "Nina85", age: 36 },
  { id: 86, name: "Oscar86", age: 28 },
  { id: 87, name: "George87", age: 33 },
  { id: 88, name: "Paula88", age: 34 },
  { id: 89, name: "Charlie89", age: 40 },
  { id: 90, name: "Ethan90", age: 31 },
  { id: 91, name: "Ian91", age: 40 },
  { id: 92, name: "Wendy92", age: 23 },
  { id: 93, name: "Ian93", age: 32 },
  { id: 94, name: "Diana94", age: 39 },
  { id: 95, name: "George95", age: 38 },
  { id: 96, name: "Tina96", age: 21 },
  { id: 97, name: "Uma97", age: 37 },
  { id: 98, name: "Nina98", age: 39 },
  { id: 99, name: "Jenna99", age: 33 },
  { id: 100, name: "Xander100", age: 28 },
];

module.exports = { people };
