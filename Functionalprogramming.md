https://claude.ai/share/e38cb6cc-2e6f-4312-8628-200f39c1b6a2

Functional Programming Techniques in JavaScript: A Comprehensive Guide
Functional programming in JavaScript offers powerful techniques that can lead to more predictable, maintainable, and robust code. This guide explores the core principles and advanced applications of functional programming in JavaScript.

1. Core Principles of Functional Programming
Functional programming in JavaScript is built on several foundational principles that promote code predictability and robustness.

Immutability
Immutability means that once data is created, it cannot be changed. Instead of modifying existing data, you create new data structures with the desired changes.

```js
const state = { user: { name: 'Alice', age: 30 }, tasks: ['task1', 'task2'] };

// Instead of mutating the original state
const newState = { 
  ...state, 
  user: { ...state.user, age: 31 } 
};

console.log(state.user.age);    // 30 (original unchanged)
console.log(newState.user.age); // 31 (new state with updated age)

```
This approach prevents unintended side effects, especially in concurrent or asynchronous environments, and makes state changes more predictable.



Pure Functions
Pure functions always return the same output for the same input and have no side effects. They don't modify external state, perform I/O operations, or depend on external variables.

```js
// Pure function
function add(a, b) {
  return a + b;
}

// Function composition with pure functions
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const multiply = x => x * 2;
const increment = x => x + 1;
const processNumber = compose(multiply, increment);

console.log(processNumber(3)); // 8; evaluates as multiply(increment(3))

```

Pure functions simplify testing, enable optimizations like memoization, and facilitate parallel computation.

First-Class Functions
In JavaScript, functions are first-class citizens, meaning they can be:

Assigned to variables
Passed as arguments to other functions
Returned from functions
This enables powerful patterns like higher-order functions, currying, and function decorators.

```js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize(function(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log(factorial(10)); // Calculates once, then uses cached result for recursive calls

```

2. Higher-Order Functions and Function Composition
Higher-order functions (HOFs) are functions that either take functions as arguments or return functions as results.

Higher-Order Functions

```js
const repeatOperation = (op, times) => {
  for (let i = 0; i < times; i++) {
    op(i);
  }
};

repeatOperation(i => console.log(`Iteration ${i}`), 3);

```

Function Composition
Function composition combines multiple functions to create a new function where the output of one function becomes the input of another.

```js
// Right-to-left composition (mathematical style)
const compose = (...funcs) => input => funcs.reduceRight((acc, fn) => fn(acc), input);

// Left-to-right composition (pipeline style)
const pipe = (...funcs) => input => funcs.reduce((acc, fn) => fn(acc), input);

const double = x => x * 2;
const square = x => x * x;

const composedFunction = compose(square, double);
console.log(composedFunction(5)); // 100: square(double(5)) = square(10) = 100

// Example with pipe
const filterEven = arr => arr.filter(n => n % 2 === 0);
const increment = arr => arr.map(n => n + 1);
const sum = arr => arr.reduce((a, b) => a + b, 0);

const processNumbers = pipe(filterEven, increment, sum);
console.log(processNumbers([1, 2, 3, 4, 5])); // 8: (2,4)->(3,5)->Sum

```

3. Closures and Their Functional Utilities
Closures occur when a function retains access to its lexical scope even when executed outside that scope.

```js
Basic Closure
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

```
Function Factories

```js
function createFormatter(prefix, suffix) {
  return function(message) {
    return `${prefix}${message}${suffix}`;
  };
}

const warningFormatter = createFormatter('WARNING: ', '!');
console.log(warningFormatter('Disk space low')); // "WARNING: Disk space low!"

```
Memoization

```js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55 (computed efficiently with memoization)

```
Module Pattern

```js

const ConfigModule = (function() {
  let config = {
    debug: false,
    version: '1.0.0'
  };
  
  return {
    get(key) {
      return config[key];
    },
    set(key, value) {
      if (key in config) {
        config[key] = value;
      }
    },
    toggleDebug() {
      config.debug = !config.debug;
    }
  };
})();

console.log(ConfigModule.get('debug')); // false
ConfigModule.toggleDebug();
console.log(ConfigModule.get('debug')); // true

```
4. Using Map, Filter, and Reduce for Data Manipulation

These array methods are fundamental to functional data manipulation in JavaScript.

Map
The map method transforms each element in an array through a function.


```js
const data = [1, 2, 3, 4, 5];

// Multiple map operations
const mappedDataChained = data
  .map(x => x + 1)
  .map(x => x * 2);

// Optimized single map
const mappedDataFused = data.map(x => (x + 1) * 2);

console.log(mappedDataChained); // [4, 6, 8, 10, 12]
console.log(mappedDataFused);   // [4, 6, 8, 10, 12]

```
Filter
The filter method selects elements that satisfy a predicate function.

```js
const dataObjects = [
  { id: 1, category: 'A', active: true },
  { id: 2, category: 'B', active: false },
  { id: 3, category: 'A', active: false },
  { id: 4, category: 'B', active: true }
];

const isCategory = category => obj => obj.category === category;
const isActive = obj => obj.active;

const activeCategoryA = dataObjects.filter(obj => 
  isCategory('A')(obj) && isActive(obj)
);

console.log(activeCategoryA); // [{ id: 1, category: 'A', active: true }]

```

Reduce
The reduce method aggregates array elements into a single value.

```js
const transactions = [
  { id: 101, type: 'credit', amount: 500 },
  { id: 102, type: 'debit', amount: 250 },
  { id: 103, type: 'credit', amount: 300 },
  { id: 104, type: 'debit', amount: 400 }
];

const grouped = transactions.reduce((acc, transaction) => {
  const { type } = transaction;
  if (!acc[type]) {
    acc[type] = [];
  }
  acc[type].push(transaction);
  return acc;
}, {});

console.log(grouped);
/* Output:
{
  credit: [
    { id: 101, type: 'credit', amount: 500 },
    { id: 103, type: 'credit', amount: 300 }
  ],
  debit: [
    { id: 102, type: 'debit', amount: 250 },
    { id: 104, type: 'debit', amount: 400 }
  ]
}
*/

```

Combining Methods

```js
const salesRecords = [
  { region: 'North', revenue: 2000, cost: 1500 },
  { region: 'South', revenue: 3000, cost: 2500 },
  { region: 'North', revenue: 2500, cost: 1800 },
  { region: 'East', revenue: 1800, cost: 1200 }
];

const totalProfitNorth = salesRecords
  .filter(record => record.region === 'North')
  .map(record => record.revenue - record.cost)
  .reduce((total, profit) => total + profit, 0);

console.log(totalProfitNorth); // 1200 (2000-1500 + 2500-1800)

```

5. Currying and Partial Application for Function Reusability
These techniques transform functions to enhance reusability and composability.

Currying
Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

```js
const curry = fn => {
  const curried = (...args) => 
    args.length >= fn.length 
      ? fn(...args) 
      : (...moreArgs) => curried(...args, ...moreArgs);
  return curried;
};

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));   // 6
console.log(curriedAdd(1, 2)(3));   // 6
console.log(curriedAdd(1)(2, 3));   // 6

```

Partial Application
Partial application pre-loads some arguments into a function without decomposing its structure.

```js

function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const partialMultiply = partial(multiply, 2);
console.log(partialMultiply(3, 4)); // 24

const partialMultiplyTwo = partial(multiply, 2, 3);
console.log(partialMultiplyTwo(4)); // 24

```

Practical Application

```js
const pipe = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

const discount = rate => price => price * (1 - rate);
const tax = rate => price => price * (1 + rate);
const formatPrice = symbol => price => `${symbol}${price.toFixed(2)}`;

const computeFinalPrice = pipe(
  discount(0.1),  // 10% discount
  tax(0.08),      // 8% tax
  formatPrice('$')
);

console.log(computeFinalPrice(100)); // "$97.20"

```

6. Functional Techniques for Asynchronous Programming
Functional programming can be applied to asynchronous operations to maintain code clarity and predictability.




Promise Chains

```js
const fetchData = url => fetch(url).then(response => response.json());

const transformData = data => data.map(item => ({
  identifier: item.id,
  computedValue: item.value * 2
}));

const handleError = err => {
  console.error('Error encountered:', err);
  throw err;
};

fetchData('https://api.example.com/data')
  .then(transformData)
  .then(result => console.log('Transformed result:', result))
  .catch(handleError);
```

Async/Await with Functional Composition

```js

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncIncrement = async x => {
  await delay(100);
  return x + 1;
};

const asyncDouble = async x => {
  await delay(100);
  return x * 2;
};

const processNumber = async x => {
  const incremented = await asyncIncrement(x);
  const doubled = await asyncDouble(incremented);
  return doubled;
};

processNumber(5)
  .then(result => console.log('Final result:', result))
  .catch(err => console.error('Error:', err));

```

Monadic Error Handling

```js

class AsyncEither {
  constructor(promise) {
    this.promise = promise;
  }

  static right(value) {
    return new AsyncEither(Promise.resolve(value));
  }

  static left(error) {
    return new AsyncEither(Promise.reject(error));
  }

  map(fn) {
    return new AsyncEither(this.promise.then(value => fn(value)));
  }

  flatMap(fn) {
    return new AsyncEither(this.promise.then(value => fn(value).promise));
  }

  catch(fn) {
    return new AsyncEither(this.promise.catch(fn));
  }

  fold(onError, onSuccess) {
    return this.promise.then(onSuccess).catch(onError);
  }
}

// Usage example
const fetchDataEither = url => new AsyncEither(
  fetch(url).then(response => response.json())
);

fetchDataEither('https://api.example.com/data')
  .map(data => data.filter(item => item.active))
  .flatMap(activeItems => AsyncEither.right(activeItems.map(item => item.value)))
  .fold(
    error => console.error('Failure:', error),
    result => console.log('Success:', result)
  );
```


2.1 Core Principles of Functional Programming
Immutability: Don't change existing data; create new copies with modifications instead. This prevents unexpected side effects.
```js
// Instead of changing the original object
const user = { name: 'Alice', age: 30 };
// Create a new object with the updated age
const updatedUser = { ...user, age: 31 };
```


Pure Functions: Functions that always return the same output for the same input and don't affect anything outside themselves. They're predictable and easy to test.

```js
// Pure function - always returns the same result for same inputs
function add(a, b) {
  return a + b;
}
```

First-Class Functions: In JavaScript, functions can be assigned to variables, passed as arguments, and returned from other functions.

```js
// Function that returns another function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
```



2.2 Higher-Order Functions and Function Composition
Higher-Order Functions: Functions that take other functions as arguments or return functions.

```js
// Higher-order function example
function repeatOperation(operation, times) {
  for (let i = 0; i < times; i++) {
    operation(i);
  }
}
repeatOperation(index => console.log(`Iteration ${index}`), 3);
```

Function Composition: Combining multiple functions to create a new function, where the output of one function becomes the input of another.
```js
// Compose functions right to left
const compose = (...functions) => input => 
  functions.reduceRight((result, fn) => fn(result), input);

const double = x => x * 2;
const addOne = x => x + 1;
const doubleAndAddOne = compose(addOne, double);

console.log(doubleAndAddOne(5)); // 11 (5*2 + 1)

```


2.3 Closures and Their Functional Utilities
Closures: Functions that remember and access variables from their outer scope, even after the outer function has finished executing.
```js
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

```

Closures are useful for:

- Creating private variables
- Function factories (functions that create other functions)
- Memoization (caching function results)
- Creating modules with private and public parts


2.4 Using Map, Filter, and Reduce for Data Manipulation
Map: Transforms each element in an array using a function and returns a new array.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

Filter: Creates a new array with elements that pass a test function.
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

Reduce: Combines all elements in an array into a single value using a function.
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

2.5 Currying and Partial Application for Function Reusability
Currying: Converting a function that takes multiple arguments into a series of functions that each take a single argument.

```js
// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6
```

Partial Application: Pre-filling some arguments of a function to create a new function.

```js
function multiply(a, b, c) {
  return a * b * c;
}

function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const multiplyByTwo = partial(multiply, 2);
console.log(multiplyByTwo(3, 4)); // 24 (2*3*4)
```



2.6 Functional Techniques for Asynchronous Programming
Applying functional principles to asynchronous code using Promises and async/await:

```js
// Pure function that fetches data
const fetchData = url => fetch(url).then(response => response.json());

// Pure function that transforms data
const processData = data => data.map(item => item.name.toUpperCase());

// Composing asynchronous operations
fetchData('https://api.example.com/users')
  .then(processData)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));

With async/await:

async function getData() {
  try {
    const data = await fetchData('https://api.example.com/users');
    const processed = processData(data);
    return processed;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

2.7 Immutable Data Structures and Libraries
Immutable data structures never change after creation. Libraries like Immutable.js, Mori, and Immer help manage immutable data efficiently.

```js
// Using Immer for immutable updates
import produce from 'immer';

const state = {
  user: { name: 'Alice', age: 30 },
  settings: { theme: 'dark' }
};

const nextState = produce(state, draft => {
  draft.user.age = 31;
  draft.settings.theme = 'light';
});

// Original state is unchanged
console.log(state.user.age); // 30
console.log(nextState.user.age); // 31
```


2.8 Combining Functional Programming with Object-Oriented Style
You can blend functional and object-oriented approaches by:

```js
Creating immutable objects with methods that return new instances:
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  // Returns a new Point instead of modifying this one
  move(dx, dy) {
    return new Point(this.x + dx, this.y + dy);
  }
}

const p1 = new Point(5, 10);
const p2 = p1.move(3, 4);
console.log(p1); // {x: 5, y: 10} - unchanged
console.log(p2); // {x: 8, y: 14} - new object

Using higher-order functions with objects:
// Function that works with objects
function updateUser(user, updates) {
  return { ...user, ...updates };
}

const user = { name: 'Bob', age: 25 };
const updatedUser = updateUser(user, { age: 26 });

console.log(user); // { name: 'Bob', age: 25 }
console.log(updatedUser); // { name: 'Bob', age: 26 }
```




