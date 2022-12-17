import "../assets/css/style.css";
//currying

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
