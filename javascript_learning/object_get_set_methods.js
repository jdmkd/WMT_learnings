const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",

  get fullName() {
    return this.firstName + this.lastName;
  },

  set fullName(language) {
    this.language = language;
  },
};

let person_list = person.fullName;
console.log(person_list);

let language = (person.language = "xx");
console.log(language);
console.log(person.language);
