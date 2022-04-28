//MAP METHOD
//The map method takes a function as an argument and returns a new array.

const people = [
  { name: 'Wes', age: 25, year: 1988 },
  { name: 'Kait', age: 27, year: 1986 },
  { name: 'Irv', age: 11, year: 1970 },
  { name: 'Lux', year: 2015 },
];

// const ages = people.map(() => {});
//Output: [ undefined, undefined, undefined, undefined ]

//Example: 1

const ages = people.map((person) => {
  const now = new Date().getFullYear();
  const age = now - person.year;
  return `${person.name} is ${age} years old.`;
});

console.log(ages);

//Example: 2

const voter = people.map((person) => {
  if (person.age >= 18) {
    return `${person.name} is a voter`;
  } else {
    return `${person.name} is not a voter`;
  }
});

console.log(voter);

//Example: 3

const newPeople = people.map((person) => {
  if (person.hasOwnProperty('year')) {
    return `${person.name} is a born in ${person.year}`;
  } else {
    return `${person.name} is a child`;
  }
});

console.log(newPeople);

//Example: 4

const name = people.map((person) => {
  if (person.hasOwnProperty('name')) {
    return `${person.name}`;
  } else {
    return `unknown`;
  }
});

console.log(name);
