# Functional Programming in JavaScript

A comprehensive guide to functional programming concepts, patterns, and applications in JavaScript.

## Table of Contents

- [Introduction to Functional Programming](#introduction-to-functional-programming)
- [Core Concepts](#core-concepts)
  - [Pure Functions](#pure-functions)
  - [Immutability](#immutability)
  - [Function Composition](#function-composition)
  - [Higher Order Functions](#higher-order-functions)
  - [Recursion](#recursion)
- [Common Functional Methods](#common-functional-methods)
- [Functional Programming Libraries](#functional-programming-libraries)
- [Practical Applications](#practical-applications)
- [Interview Questions](#interview-questions)
- [Resources](#resources)

## Introduction to Functional Programming

Functional Programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes:

- Declarative code over imperative code
- Expressions over statements
- Avoiding side effects
- Functions as first-class citizens

**Benefits of Functional Programming:**
- More predictable code
- Easier to test
- Better concurrency
- Simpler debugging
- Enhanced code reuse

## Core Concepts

### Pure Functions

A pure function:
1. Always returns the same output for the same input
2. Has no side effects

```javascript
// Impure function (uses external state)
let counter = 0;
function incrementCounter() {
  counter++;  // Side effect
  return counter;
}

// Pure function
function add(a, b) {
  return a + b;  // Always returns same output for same input, no side effects
}
```

### Immutability

Immutability means not changing data after it's created. Instead of modifying existing data, create new copies with the desired changes.

```javascript
// Mutable approach
const mutableArray = [1, 2, 3];
mutableArray.push(4);  // Modifies original array

// Immutable approach
const immutableArray = [1, 2, 3];
const newArray = [...immutableArray, 4];  // Creates new array
```

### Function Composition

Combining multiple functions to create a new function.

```javascript
const add5 = x => x + 5;
const multiply2 = x => x * 2;

// Manual composition
const add5ThenMultiply2 = x => multiply2(add5(x));

// Using compose utility
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const add5AndMultiply2 = compose(multiply2, add5);

add5AndMultiply2(10);  // Result: 30 (first adds 5, then multiplies by 2)
```

### Higher Order Functions

Functions that take other functions as arguments or return functions.

```javascript
// Function that takes a function as argument
function applyOperation(x, operation) {
  return operation(x);
}

applyOperation(5, x => x * 2);  // Result: 10

// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
double(5);  // Result: 10
```

### Recursion

A function that calls itself to solve smaller instances of the same problem.

```javascript
// Factorial using recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(5);  // Result: 120

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// More efficient fibonacci with memoization
function fibonacciMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}
```

## Common Functional Methods

JavaScript provides several built-in methods for functional programming:

### Array Methods

```javascript
// map - transforms each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]

// filter - keeps elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]

// reduce - accumulates values
const sum = numbers.reduce((acc, val) => acc + val, 0);  // 15

// find - gets first element that passes a test
const firstEven = numbers.find(num => num % 2 === 0);  // 2

// every - checks if all elements pass a test
const allPositive = numbers.every(num => num > 0);  // true

// some - checks if any elements pass a test
const hasEven = numbers.some(num => num % 2 === 0);  // true
```

### Function Methods

```javascript
// bind - creates a new function with 'this' context
const person = {
  name: 'John',
  greet(greeting) {
    return `${greeting}, ${this.name}!`;
  }
};

const greetJohn = person.greet.bind(person);
greetJohn('Hello');  // "Hello, John!"

// call - invokes function with specified 'this' and arguments
person.greet.call({ name: 'Jane' }, 'Hi');  // "Hi, Jane!"

// apply - like call but takes arguments as array
person.greet.apply({ name: 'Jane' }, ['Hi']);  // "Hi, Jane!"
```

## Functional Programming Libraries

Popular JavaScript libraries for functional programming:

1. **Lodash/FP**: Optimized for functional programming
```javascript
import _ from 'lodash/fp';

_.map(x => x * 2, [1, 2, 3]);  // [2, 4, 6]
```

2. **Ramda**: Designed specifically for functional programming
```javascript
import * as R from 'ramda';

const addAndDouble = R.pipe(
  R.add(5),
  R.multiply(2)
);

addAndDouble(10);  // 30
```

3. **Immutable.js**: For immutable data structures
```javascript
import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2 });
const map2 = map1.set('b', 3);

map1.get('b');  // 2
map2.get('b');  // 3
```

## Practical Applications

### State Management in React

Using functional programming principles in React:

```javascript
// Using reducer function (pure function) for state management
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// In component
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

### Data Processing Pipelines

```javascript
const processUserData = pipe(
  filter(user => user.active),
  map(user => ({ 
    id: user.id, 
    name: user.name, 
    score: calculateScore(user) 
  })),
  sortBy('score'),
  take(10)
);

const topUsers = processUserData(allUsers);
```

### Error Handling

```javascript
// Using Either monad for error handling
const getUser = id => 
  id
    ? Right(fetchUser(id))
    : Left(new Error('Invalid ID'));

getUser(1)
  .map(user => user.name)
  .fold(
    err => console.error(err),
    name => console.log(`User: ${name}`)
  );
```

## Interview Questions

Here are common functional programming interview questions and answers:

### 1. What makes a function "pure"?

**Answer**: A pure function always returns the same output for the same input and has no side effects. It doesn't modify external state, doesn't mutate its arguments, and doesn't perform I/O operations.

### 2. How would you implement a `compose` function?

**Answer**:
```javascript
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
```

### 3. What are the benefits of immutability?

**Answer**: Immutability makes code more predictable, easier to test and debug, prevents unintended side effects, improves concurrency, and simplifies detecting changes.

### 4. Explain function currying and provide an example.

**Answer**: Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

```javascript
// Uncurried function
const add = (a, b) => a + b;

// Curried function
const curriedAdd = a => b => a + b;
const add5 = curriedAdd(5);
add5(3);  // 8
```

### 5. What's the difference between `map`, `filter`, and `reduce`?

**Answer**:
- `map`: Transforms each element in a collection, returning a new collection of the same length
- `filter`: Selects elements that pass a condition, returning a subset of the collection
- `reduce`: Combines all elements into a single value using an accumulator

### 6. How would you handle side effects in functional programming?

**Answer**: Isolate side effects from pure functions. Use techniques like:
- Dependency injection
- Monads (like IO monad)
- Higher-order functions to wrap impure operations
- Push side effects to the edges of your application

## Resources

- Books:
  - "Functional-Light JavaScript" by Kyle Simpson
  - "JavaScript Allongé" by Reginald Braithwaite
  - "Mostly Adequate Guide to Functional Programming" by Brian Lonsdorf

- Online Resources:
  - [Functional Programming Principles in JavaScript](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
  - [Mozilla Developer Network: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [JavaScript Functional Programming Cookbook](https://github.com/js-functional/js-funcional)

- Libraries:
  - [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)
  - [Ramda](https://ramdajs.com/)
  - [Immutable.js](https://immutable-js.com/)
  - [fp-ts](https://github.com/gcanti/fp-ts)

---

## Contributing

Feel free to submit a PR to improve this guide! Add examples, clarify concepts, or suggest additional resources.

## License

MIT
