//Composition

const f = (x) => x + 2;
const g = (x) => x * 3;

const fg = (x) => f(g(x));
console.log(fg(5));

//Composition is the act of putting two functions together to form a third function where the output of one function is the input of the other.

//without composition

const scream = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => `${str} ${str}`;

console.log(repeat(exclaim(scream('I love egghead'))));

//with composition

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(repeat, exclaim, scream);

console.log(withExuberance('I love egghead'));
