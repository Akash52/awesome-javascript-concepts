interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);

newPerson.age = 25; // Error: cannot assign to 'age' because it is a read-only property.
