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

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

console.log(items);

//array - add

const newItem = {
  id: "🍎",
  name: "Apple",
  price: 299,
};
// items.push(newItem);
const newItems = [...items, newItem];
console.log(items);
console.log(newItems);

//array - remove

// const removed = items.splice(0, 1);
// console.log(removed, items);
const updatedItems = items.filter((item) => item.id !== "🍔");
console.log(updatedItems, items);

//Objects - add

const item = {
  id: "🍎",
  name: "Apple",
};
const itemThatIsNew = {
  ...item,
  price: 244,
};
// item.price = 299;
console.log(item, itemThatIsNew);

//Objects - remove

const itemToRemove = {
  id: "🍎",
  name: "Apple",
  price: 244,
};
// delete itemToRemove.price;
console.log(itemToRemove);
const { price, ...leftOverItems } = itemToRemove;
console.log(price, itemToRemove);
console.log(leftOverItems);

//identity

console.log({} === {});
console.log([] === []);
console.log(itemToRemove === itemToRemove);
console.log(itemToRemove === leftOverItems);
