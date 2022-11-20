//Array.prototype.concat();

//Array concat method concatenates two or more arrays and returns a new array.

//Basic example

let items = [1, 2, 3];
let newItems = items.concat(4, 5, 6);
console.log(newItems);

//output: [1, 2, 3, 4, 5, 6]

//concat mixed types

let items = [1, 2, 3];
let newItems = items.concat(4, 5, '6');
console.log(newItems);

//output: [1, 2, 3, 4, 5, '6']

//concat arrays

let items = [1, 2, 3];
let newItems = items.concat([4, 5, 6]);
console.log(newItems);

//output: [1, 2, 3, 4, 5, 6]

//limitations of concat

//you can't concat nested arrays

let items = [1, 2, 3];
let newItems = items.concat([4, 5, 6], [7, 8, 9, [10, 11, 12]]);

//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]]

//Real world example

let people = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Mike',
    age: 23,
  },
];

let newPeople = [
  {
    name: 'Jane',
    age: 25,
  },
  {
    name: 'Tom',
    age: 27,
  },
];

people.concat(newPeople).forEach(function (person) {
  console.log(person.name);
});

//

//output: John Mike Jane Tom
