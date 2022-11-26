const person = {
  name: "Max",
  age: 30,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: "Manu",
  age: 31,
};
