//Higher Order Functions

//1. Accepts a function as an argument
//2. Returns a function that can be called later

const withCount = (fn) => {
  let count = 0;

  return (...args) => {
    console.log(`Call Count : ${++count}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const countAdd = withCount(add);

console.log(countAdd(1, 2));
console.log(countAdd(2, 3));
console.log(countAdd(3, 5));
