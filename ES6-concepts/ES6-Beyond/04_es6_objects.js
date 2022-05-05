//Example : 1

//ES5

// function createPerson1(name, age, admin) {
//   return {
//     name: name,
//     age: age,
//     admin: admin,
//   };
// }

//ES6

// function createPerson2(name, age, admin) {
//   return {
//     name,
//     age,
//     admin,
//   };
// }
// console.log(createPerson1('John', 30, true));
// console.log(createPerson2('Peter', 40, false));

//Example : 2

// const specialProperty = 'nationality';

// const person = {
//   name: 'Jhone',
//   age: 22,
//   isAdmin: false,
// };

// person[specialProperty] = 'Indian';

// console.log(person);

// function makeObject(key, value) {
//   return {
//     [key]: value,
//   };
// }

// const user = makeObject('name', 'John');
// const dog = makeObject('name', 'Rover');

//Example : 3

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName());

//ES6

// const specialProperty = 'nationality';
// const firstName = 'Jhone';
// const lastName = 'Doe';

// const person = {
//   firstName,
//   lastName,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   [specialProperty]: 'Indian',
// };
// console.log(person);
