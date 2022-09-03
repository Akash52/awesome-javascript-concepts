//Immutable Data

//Mutable = can be changed after creation
//Immutable =can't be changed after creation

// const a = [1, 2, 3];
// const b = a;
// b.push(4);

// console.log(a);

//Referencing same array

//Example : 01

// const a = {
//   foo: 'bar',
// };
// const b = a;

// b.foo = 'baz';

// console.log(a.foo);

//Example : 02
// const push = (value) => (array) => {
//   const clone = [...array];
//   clone.push(value);
//   return clone;
// };

// const a = [1, 2, 3];
// const b = push(4)(a);
// console.log(b);
// console.log(a === b);

//In these case they are referncing to defferent array

//Mutable & Immutable

// class MutableGlass {
//   constructor(content, amount) {
//     this.content = content;
//     this.amount = amount;
//   }

//   takeDrink(value) {
//     this.amount = Math.max(this.amount - value, 0);
//     return this;
//   }
// }

// const mg1 = new MutableGlass('Water', 100);
// console.log(mg1);
// const mg2 = mg1.takeDrink(20);
// console.log(mg2);
// console.log(mg1 === mg2);
// console.log(mg1.amount === mg2.amount);

// class ImmutableGlass {
//   constructor(content, amount) {
//     this.content = content;
//     this.amount = amount;
//   }
//   takeDrink(value) {
//     return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
//   }
// }

// const ig1 = new ImmutableGlass('Water', 100);
// const ig2 = ig1.takeDrink(20);

// console.log(ig1 === ig2);
