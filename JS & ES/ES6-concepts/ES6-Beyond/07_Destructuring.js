//Object Destructuring

// const person = {
//   name: 'Jhone Doe',
//   age: 45,
// };

// const { name, age } = person;

// console.log(name, age);

//Array Destructuring

// const fruit = ['apple', 'orange', 'grape', 'banana', 'mango'];
// const [fruit1, fruit2, fruit3, fruit4, fruit5] = fruit;
// console.log(fruit1, fruit2, fruit3, fruit4, fruit5);

//Example : 2

// const team = [
//   {
//     name: 'John Doe',
//   },
//   {
//     name: 'Jane Doe',
//   },
//   {
//     name: 'Jack Doe',
//   },
// ];

// const [player1, ...player3] = team;
// console.log(player1, player3);

//Example : 3

// function fetchDogs({ breed }) {
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then((response) => response.json())
//     .then((data) => console.log(data.message));
// }

// const dog = {
//   breed: 'pug',
// };

// fetchDogs(dog);
