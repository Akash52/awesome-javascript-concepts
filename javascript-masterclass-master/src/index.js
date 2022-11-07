import "../assets/css/style.css";

// const items = [
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ];

// console.log(items);

//Immutable vs Mutable Concepts

let a = "Apple Sky";
a = "Sky Apple";

const b = a.slice(0, 1);
console.log(a, b);

const x = Object.freeze({ id: "🍔", name: "Super Burger", price: 399 });

x.id = "😃";
console.log(x);
