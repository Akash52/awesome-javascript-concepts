//without template literals

// function sayHello(name) {
//   return 'Hello ' + name;
// }

// console.log(sayHello('John'));

//with template literals

// function sayHello(name) {
//   return `Hello ${name}`;
// }

// console.log(sayHello('John'));

//Example : 1

// const baseUrl = 'https:jsonplaceholder.typicode.com/users';

// fetch(`${baseUrl}/1`)
//   .then((response) => response.json())
//   .then((users) => console.log(users));

// fetch(`${baseUrl}/2`)
//   .then((response) => response.json())
//   .then((users) => console.log(users));

//Example : 2

// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(1, 2));

//Example : 3

// const result = 'Sarah : 1 \n Peter : 2 \n John : 3';
// console.log(result);

//Example : 4

// const greet = (greeting, name, age) => {
//   return `${greeting} ${name}! You are ${age} years old!`;
// };

// const result = greet('Hello', 'John', 30);
// console.log(result);
