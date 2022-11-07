import "../assets/css/style.css";

// const items = [
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ];

// console.log(items);

//Immutable vs Mutable Concepts

// let a = "Apple Sky";
// a = "Sky Apple";

// const b = a.slice(0, 1);
// console.log(a, b);

// const x = Object.freeze({ id: "🍔", name: "Super Burger", price: 399 });

// x.id = "😃";
// console.log(x);

//Immutable Data Strucuture Pattern

// const items = [
//   { id: "🍔", name: "Super Burger", price: 399 },
//   { id: "🍟", name: "Jumbo Fries", price: 199 },
//   { id: "🥤", name: "Big Slurp", price: 299 },
// ];

// console.log(items);

//array - add

// const newItem = {
//   id: "🍎",
//   name: "Apple",
//   price: 299,
// };
// items.push(newItem);
// const newItems = [...items, newItem];
// console.log(items);
// console.log(newItems);

//array - remove

// const removed = items.splice(0, 1);
// console.log(removed, items);
// const updatedItems = items.filter((item) => item.id !== "🍔");
// console.log(updatedItems, items);

//Objects - add

// const item = {
//   id: "🍎",
//   name: "Apple",
// };
// const itemThatIsNew = {
//   ...item,
//   price: 244,
// };
// // item.price = 299;
// console.log(item, itemThatIsNew);

//Objects - remove

// const itemToRemove = {
//   id: "🍎",
//   name: "Apple",
//   price: 244,
// };
// delete itemToRemove.price;
// console.log(itemToRemove);
// const { price, ...leftOverItems } = itemToRemove;
// console.log(price, itemToRemove);
// console.log(leftOverItems);

//identity

// console.log({} === {});
// console.log([] === []);
// console.log(itemToRemove === itemToRemove);
// console.log(itemToRemove === leftOverItems);

//Imperative vs Declarative Programming

// const items = [
//   { id: "🍔", name: "Super Burger", price: 399 },
//   { id: "🍟", name: "Jumbo Fries", price: 199 },
//   { id: "🥤", name: "Big Slurp", price: 299 },
// ];

//Imperative

// const itemNamesImperative = [];

// for (let i = 0; i < items.length; i++) {
//   const item = items[i];
//   itemNamesImperative.push(item);
// }
// console.log(items);
// console.log(itemNamesImperative);

// Declarative
// const itemNamesDeclarative = items
//   .map(function (item) {
//     return item.price;
//   })
//   .reduce(function (price, nextPrice) {
//     return price + nextPrice;
//   });
// console.log(itemNamesDeclarative);

//Lambda Expressions VS Anonymous Functions

// const items = [
//   { id: "🍔", name: "Super Burger", price: 399 },
//   { id: "🍟", name: "Jumbo Fries", price: 199 },
//   { id: "🥤", name: "Big Slurp", price: 299 },
// ];

// function getItemName(item) {
//   return item.name;
// }
// console.log(items.map(getItemName));

// console.log(
//   items.map(function (item) {
//     return item.name;
//   })
// );

// console.log(items.map((item) => item.name));

// const getItemNameExp = (item) => item.name;
// console.log(items.map(getItemNameExp));

//Pure Functions and Referential Transparency

//Pure Funcgtions ?
//1. Referential transparency
//2. Side-Effect free

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

//ImPure function

// const getTotalImpure = () => {
//   document.querySelector("#app").innerHTML = items.reduce(
//     (x, y) => x + y.price,
//     0
//   );
// };

// getTotalImpure();

// Pure function

const getTotalPure = (v) => v.reduce((x, y) => x + y.price, 0);
document.querySelector("#app").innerHTML = getTotalPure(items);
