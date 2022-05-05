// function getInfo(name, age) {
//   return `${name} is ${age} years old`;
// }
// console.log(getInfo('John', 30));

// const getInfo2 = (name, age) => `${name} is ${age} years old`;
// console.log(getInfo2('John', 30));

//hosting

// console.log(greeting());
// console.log(name);

// function greeting() {
//   return 'Hey there!';
// }
// console.log(greeting());

// const name = 'John';

// console.log(greeting());
// const greeting = () => 'Hey there!';

//Example : 1

// var radius = 5;
// const shape = {
//   radius: 10,
//   diameter: function () {
//     return this.radius * 2;
//   },
//   diameter2: () => this.radius * 2,
// };

// console.log(shape.diameter());
// console.log(shape.diameter2());

//Example : 2

// const hero = {
//   name: 'Spiderman',
//   getName: function () {
//     setTimeout(
//       function () {
//         console.log("Superhero's name is " + this.name);
//       }.bind(this),
//       1000
//     );
//   },
// };

// console.log(hero.getName());

//Example : 3 - Arrow functions

// const hero = {
//   name: 'Spiderman',
//   getName: function () {
//     setTimeout(() => {
//       console.log("Superhero's name is " + this.name);
//     }, 1000);
//   },
// };
// console.log(hero.getName());
