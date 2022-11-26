interface Person {
  name: string;
  age: number;
}

// interface PartialPerson {
//   name?: string;
//   age?: number;
// }

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson(person: Person, fieldsToUpdate: Partial<Person>) {
  return { ...person, ...fieldsToUpdate };
}

const person: Person = {
  name: "John",
  age: 30,
};

const updatedPerson = updatePerson(person, { age: 52 });
console.log(updatedPerson);
