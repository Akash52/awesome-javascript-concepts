const person = {
  name: "Max",
  age: 30,
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"
type PersonTypes = Person[PersonKeys]; // "Max" | 30

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");

const anotherPerson: Person = {
  name: "Manu",
  age: 31,
};
