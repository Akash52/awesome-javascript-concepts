interface Person {
  name: string;
  age?: number;
}

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age} years old.`;
}

const person: Required<Person> = {
  name: "John",
  age: 30,
};

const age = printAge(person);
