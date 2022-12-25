### Immutable vs Mutable Concepts

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

console.log(items);

let a = "Apple Sky";
a = "Sky Apple";

const b = a.slice(0, 1);
console.log(a, b);

const x = Object.freeze({ id: "🍔", name: "Super Burger", price: 399 });

x.id = "😃";
console.log(x);

// Immutable Data Strucuture Pattern

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

console.log(items);

array - add;

const newItem = {
  id: "🍎",
  name: "Apple",
  price: 299,
};
items.push(newItem);
const newItems = [...items, newItem];
console.log(items);
console.log(newItems);

array - remove;

const removed = items.splice(0, 1);
console.log(removed, items);
const updatedItems = items.filter((item) => item.id !== "🍔");
console.log(updatedItems, items);

Objects - add;

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

Objects - remove;

const itemToRemove = {
  id: "🍎",
  name: "Apple",
  price: 244,
};
delete itemToRemove.price;
console.log(itemToRemove);
const { price, ...leftOverItems } = itemToRemove;
console.log(price, itemToRemove);
console.log(leftOverItems);

identity;

console.log({} === {});
console.log([] === []);
console.log(itemToRemove === itemToRemove);
console.log(itemToRemove === leftOverItems);
```

### Imperative vs Declarative Programming

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

// Imperative

const itemNamesImperative = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  itemNamesImperative.push(item);
}
console.log(items);
console.log(itemNamesImperative);

// Declarative
const itemNamesDeclarative = items
  .map(function (item) {
    return item.price;
  })
  .reduce(function (price, nextPrice) {
    return price + nextPrice;
  });
console.log(itemNamesDeclarative);
```

### Lambda Expressions VS Anonymous Functions

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

function getItemName(item) {
  return item.name;
}
console.log(items.map(getItemName));

console.log(
  items.map(function (item) {
    return item.name;
  })
);

console.log(items.map((item) => item.name));

const getItemNameExp = (item) => item.name;
console.log(items.map(getItemNameExp));
```

### Pure Functions and Referential Transparency

```js
// Pure Functions ?
1. Referential transparency
2. Side-Effect free

const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

// ImPure function

const getTotalImpure = () => {
  document.querySelector("#app").innerHTML = items.reduce(
    (x, y) => x + y.price,
    0
  );
};

getTotalImpure();

Pure function

const getTotalPure = (v) => v.reduce((x, y) => x + y.price, 0);
document.querySelector("#app").innerHTML = getTotalPure(items);
```

### Funtion Clousers

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

const getNameFromId = (id) => {
  return (items) => {
    return items.find((item) => item.id === id).name;
  };
};

const getFires = getNameFromId("🍟");
const getBurger = getNameFromId("🍔");
console.log(getFires(items));
console.log(getBurger(items));
```

### Higher-Order Functions

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

//HOF
// 1. Return a new Function
// 2. take other functions as arguments

const getNameFromId = (id) => {
  return (items) => {
    return items.find((item) => item.id === id).name;
  };
};

const getFires = getNameFromId("🍟");
const getBurger = getNameFromId("🍔");

console.log(getFires(items));
console.log(getBurger(items));
```

### currying & partial Application

```js
const items = [
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
];

//f(a,b,c)
//f(a)(b)(c)

const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return fn.bind(null, ...args);
  };
};

const getNameFromId = curry(
  (id, items) => items.find((item) => item.id === id).name
);

const getFires = getNameFromId("🍟", items);
const getBurger = getNameFromId("🍔"); //partially applying

console.log(getFires);
console.log(getBurger(items));
```

### Function Composition and Currying

```js
// const items = [
//   { id: "🍔", name: "Super Burger", price: 399 },
//   { id: "🍟", name: "Jumbo Fries", price: 199 },
//   { id: "🥤", name: "Big Slurp", price: 299 },
// ];

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return fn.bind(null, ...args);
  };
};

const split = curry((separator, string) => string.split(separator));
const join = curry((separator, string) => string.join(separator));
const map = curry((fn, array) => array.map(fn));

const toLowerCase = (x) => x.toLowerCase();

const slugify = compose(join("-"), map(toLowerCase), split(" "));

console.log(slugify("Ultimate Courses"));
console.log(slugify("Todd Motto"));

// const slugify = (str) => join("-")(map(toLowerCase)(split(" ")(str)));
// console.log(slugify("Ultimate Courses"));

// const slugify = "Ultimate Courses"
//   .split(" ")
//   .map((x) => x.toLowerCase())
//   .join("-");
// console.log(slugify);
```

### Procedural Programming

```js
const cart = [];

const addToCart = (item) => {
  cart.push(item);
};

const removeFromCart = (id) => {
  const index = cart.findIndex((x) => x.id === id);
  cart.splice(index, 1);
};

const burger = {
  id: "🍔",
  name: "Burger King",
  price: 199,
};

addToCart(burger);
console.log(cart);

setTimeout(() => {
  removeFromCart("🍔");
  console.log(cart);
}, 2500);
```

### Object Literals and Encapsulation

```js
const cart = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  remove(id) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  },
};

const burger = {
  id: "🍔",
  name: "Burger King",
  price: 199,
};

cart.add(burger);
console.log(cart);

setTimeout(() => {
  cart.remove("🍔");
  console.log(cart);
}, 2500);
```

### Object Literals and Factory Funtions

```js
const createCart = (items = []) => ({
  items,
  add(item) {
    this.items.push(item);
  },
  remove(id) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  },
});

const burger = {
  id: "🍔",
  name: "Burger King",
  price: 199,
};

const cart = createCart();

cart.add(burger);
console.log(cart);

setTimeout(() => {
  cart.remove("🍔");
  console.log(cart);
}, 2500);
```
