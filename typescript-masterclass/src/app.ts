const person = {
  name: "Max",
  age: 30,
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"

type PersonTypes = Person[PersonKeys]; // "Max" | 30

const anotherPerson: Person = {
  name: "Manu",
  age: 31,
};
