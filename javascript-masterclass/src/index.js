import "../assets/css/style.css";
//Function Composition and Currying

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
