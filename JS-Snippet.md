### 1. Array Comparison

```javascript
console.log([] == []); // Output: false
console.log([] == ![]); // Output: true
```

- **Explanation**: The first comparison returns `false` because each array is a different object in memory. The second comparison returns `true` because the right side evaluates to `false` (`![]` is `false`), and `[] == false` is `true` due to type coercion, where the empty array is coerced to a number (0) and `false` is also coerced to a number (0).

### 2. Null Comparisons

```javascript
console.log(null == 0); // Output: false
console.log(null > 0);  // Output: false
console.log(null >= 0); // Output: true
```

- **Explanation**: `null` is not equal to `0` due to type coercion rules, but `null >= 0` is `true` because `null` is converted to `0` in relational comparison.

### 3. The Infamous `typeof`

```javascript
console.log(typeof null); // Output: "object"
console.log(typeof NaN);  // Output: "number"
```

- **Explanation**: `typeof null` returning `"object"` is a well-known JavaScript quirk, considered a bug for historical reasons. `NaN` (Not-a-Number) is technically of type `"number"`.

### 4. Adding Arrays

```javascript
console.log([1, 2] + [3, 4]); // Output: "1,23,4"
```

- **Explanation**: Arrays are converted to strings and concatenated, resulting in the unexpected string `"1,23,4"`.

### 5. Adding Objects

```javascript
console.log({} + []); // Output: "[object Object]"
console.log([] + {}); // Output: "[object Object]"
```

- **Explanation**: When adding an object and an array, both operands are converted to their string representations and then concatenated.

### 6. Incrementing

```javascript
let num = '5';
console.log(++num); // Output: 6
```

- **Explanation**: The pre-increment operator coerces the string `'5'` to a number and increments it.

### 7. The Spread with Strings

```javascript
console.log([..."Hello"]); // Output: ["H", "e", "l", "l", "o"]
```

- **Explanation**: The spread operator (`...`) splits the string into an array of its individual characters.

### 8. Default Parameters and `undefined`

```javascript
function add(a = 1, b = a) {
  return a + b;
}
console.log(add(undefined, 2)); // Output: 3
```

- **Explanation**: Passing `undefined` to a function parameter that has a default value causes the default value to be used.

### 9. Floating Point Precision

```javascript
console.log(0.1 + 0.2 === 0.3); // Output: false
```

- **Explanation**: Due to floating-point arithmetic and precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`.

### 10. The `void` Operator

```javascript
console.log(void(0)); // Output: undefined
```

- **Explanation**: The `void` operator evaluates the expression and then returns `undefined`. It's often used to explicitly return `undefined` from expressions.

### 11. Function Hoisting

```javascript
console.log(typeof foo); // Output: "function"
console.log(typeof bar); // Output: "undefined"

function foo() {}
var bar = function() {};
```

- **Explanation**: Function declarations are hoisted completely, meaning both the declaration and the definition are hoisted to the top. However, function expressions (like `bar`) are only hoisted in their declaration part, not their initialization.

### 12. `NaN` is Not Equal to `NaN`

```javascript
console.log(NaN === NaN); // Output: false
```

- **Explanation**: In JavaScript, `NaN` (Not-a-Number) is the only value that is not equal to itself. To check if a value is `NaN`, use `Number.isNaN()` instead.

### 13. The `arguments` Object

```javascript
function example() {
  return arguments[0];
}
console.log(example(1, 2, 3)); // Output: 1
```

- **Explanation**: Inside a function, `arguments` is an Array-like object accessible that contains the values of the arguments passed to that function. It's not an actual array, though, so it doesn't have array methods.

### 14. Implicit Type Conversion (Coercion)

```javascript
console.log('5' + 3); // Output: "53"
console.log('5' - 3); // Output: 2
```

- **Explanation**: The `+` operator can serve as both addition and string concatenation, leading to type coercion into a string when one of the operands is a string. The `-` operator, however, only works with numbers, so it coerces the string `'5'` into a number before performing subtraction.

### 15. The `instanceof` Operator

```javascript
function C(){}
function D(){}

var o = new C();

console.log(o instanceof C); // Output: true
console.log(o instanceof D); // Output: false
```

- **Explanation**: The `instanceof` operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

### 16. `null` Type

```javascript
console.log(typeof null); // Output: "object"
```

- **Explanation**: This is a long-standing bug in JavaScript, where `typeof null` returns `"object"`. `null` is actually considered to be of its own type.

### 17. The `delete` Operator

```javascript
var obj = {a: 1};
delete obj.a;
console.log(obj.a); // Output: undefined
```

- **Explanation**: The `delete` operator removes a property from an object. If the property existed, `delete` returns `true`; otherwise, it returns `false`.

### 18. Automatic Semicolon Insertion

```javascript
function returnObject() {
  return
  {
    a: 1
  };
}
console.log(returnObject()); // Output: undefined
```

- **Explanation**: JavaScript automatically inserts a semicolon after the `return` statement, causing the function to return `undefined` instead of the object.

### 19. The `in` Operator

```javascript
var arr = [1,2,3];
console.log(2 in arr); // Output: true
console.log(3 in arr); // Output: false
```

- **Explanation**: The `in` operator checks if a property exists in an object. With arrays, it checks if an index exists, not the value. Since arrays are zero-indexed, `2` is a valid index, but `3` is not.

### 20. The `Array.prototype.sort()` Method

```javascript
var numbers = [10, 5, 11];
numbers.sort();
console.log(numbers); // Output: [10, 11, 5]
```

- **Explanation**: By default, `sort()` converts elements to strings and compares their UTF-16 character sequences. To sort numbers numerically, you must provide a compare function.



### 21. Zero Types

```javascript
console.log(0 == false);   // Output: true
console.log(0 === false);  // Output: false
console.log(0 == '0');     // Output: true
console.log(0 === '0');    // Output: false
```


- **Explanation**: The `==` operator performs type coercion, where `0`, `false`, and `'0'` can be considered equal. The `===` operator, however, checks for both value and type, so `0` is not strictly equal to `false` or `'0'`.

### 22. The Scope of `var` vs. `let`/`const`

```javascript
if (true) {
  var varVariable = 'This is var';
  let letVariable = 'This is let';
}
console.log(varVariable); // Output: "This is var"
console.log(letVariable); // ReferenceError: letVariable is not defined
```


- **Explanation**: Variables declared with `var` are function-scoped (or globally-scoped if declared outside of a function), while `let` and `const` are block-scoped. This means `letVariable` is not accessible outside of the `if` block.

### 23. The `typeof` Operator on Different Types

```javascript
console.log(typeof undefined); // Output: "undefined"
console.log(typeof true);      // Output: "boolean"
console.log(typeof 42);        // Output: "number"
console.log(typeof "42");      // Output: "string"
console.log(typeof {});        // Output: "object"
console.log(typeof Symbol());  // Output: "symbol"
console.log(typeof null);      // Output: "object" (this is considered a bug in JavaScript)
```


- **Explanation**: The `typeof` operator returns a string indicating the type of the unevaluated operand. The case of `typeof null` returning `"object"` is a known, longstanding bug in JavaScript.

### 24. Closure Inside Loops

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 4 (three times)
  }, 0);
}
```


- **Explanation**: Because `var` is function-scoped, by the time the `setTimeout` function executes, the loop has completed, and `i` has a value of `4`. To log `1`, `2`, `3` as expected, you can use `let` in the loop declaration, which is block-scoped.

### 25. The `this` Keyword

```javascript
function whatIsThis() {
  return this;
}
console.log(whatIsThis()); // Output: Window object (or global object in non-browser environment)

const obj = {
  whatIsThis: whatIsThis
};
console.log(obj.whatIsThis()); // Output: obj
```


- **Explanation**: The value of `this` is determined by how a function is called. In the first case, `whatIsThis` is called in the global context, so `this` refers to the global object (`window` in browsers). In the second case, `whatIsThis` is called as a method of `obj`, so `this` refers to `obj`.

### 26. Floating Point Math

```javascript
console.log(0.1 + 0.2); // Output: 0.30000000000000004
```


- **Explanation**: JavaScript uses binary floating-point arithmetic, which can lead to precision issues with decimal numbers. This is because some fractions cannot be represented exactly in binary.

### 27. Default Parameters and Destructuring

```javascript
function greet({name = 'Anonymous'} = {}) {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: "Hello, Anonymous!"
console.log(greet({name: 'John'})); // Output: "Hello, John!"
```


- **Explanation**: This function uses destructuring with default parameters. If no argument is passed, it defaults to an empty object `{}`, and if `name` is not provided in the object, it defaults to `'Anonymous'`.




### 28. Template Literals and Expressions

```javascript
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`); // Output: "Fifteen is 15 and not 20."
```


- **Explanation**: Template literals allow embedded expressions. These expressions are evaluated, and the resulting values are converted into strings and part of the final string.

### 29. Destructuring Assignment with Arrays

```javascript
let [first, , third] = ["Spades", "Diamonds", "Hearts"];
console.log(first);  // Output: "Spades"
console.log(third);  // Output: "Hearts"
```


- **Explanation**: Destructuring allows binding using pattern matching, with support for matching arrays and objects. It's possible to skip elements in an array by leaving a gap in the destructuring assignment.

### 30. Function Default Parameters

```javascript
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5
```


- **Explanation**: Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

### 31. Rest Parameters

```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3)); // Output: 6
```


- **Explanation**: Rest parameters allow us to represent an indefinite number of arguments as an array, providing a way to handle function parameters more flexibly.

### 32. `Array.prototype.map()` vs `Array.prototype.forEach()`

```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

numbers.forEach((num, index) => {
  numbers[index] = num * num;
});
console.log(numbers); // Output: [1, 4, 9, 16]
```


- **Explanation**: `.map()` returns a new array containing the results of applying a function to every element in the original array. `.forEach()` performs a specified action for each element in an array but does not return a value.

### 33. Short-circuit Evaluation

```javascript
let a = null;
let b = "Hello World";
console.log(a || b); // Output: "Hello World"
console.log(a && b); // Output: null
```


- **Explanation**: JavaScript supports short-circuit evaluation. `||` returns the first truthy value or the last value if none are truthy. `&&` returns the first falsy value or the last value if all are truthy.

### 34. The Spread Operator for Array Concatenation

```javascript
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1); // Output: [0, 1, 2, 3, 4, 5]
```


- **Explanation**: The spread operator `...` allows an iterable (e.g., array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

### 35. Object Property Shorthand

```javascript
const name = "John Doe";
const age = 30;

const user = { name, age };
console.log(user); // Output: { name: "John Doe", age: 30 }
```


- **Explanation**: ES6 allows you to eliminate the redundancy of having to write the property name and variable name when they are the same.

### 36. `Promise` Basics

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000);
});

promise.then(
  result => console.log(result), // Output: "done" after 1 second
  error => console.log(error) // doesn't run
);
```


- **Explanation**: A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. `.then()` takes two arguments: a callback for success and another for failure.

### 37. Async/Await Basic Example

```javascript
async function helloAsync() {
  return "Hello Async!";
}

helloAsync().then(value => console.log(value)); // Output: "Hello Async!"
```


- **Explanation**: `async` functions allow you to work with promises in a more comfortable way. The `await` keyword can be used inside an `async` function to pause the execution until the promise is settled. The function then resumes execution and returns the resolved value.

### 38. `async`/`await` with Error Handling

```javascript
async function fetchWithErrorHandling() {
  try {
    let response = await fetch('https://nonexistent.url');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchWithErrorHandling(); // Output: Error: [Error details]
```

- **Explanation**: The `try...catch` block in an `async` function allows for elegant handling of rejected promises. If an error occurs during any `await` call within the `try` block, the control moves to the `catch` block.

### 39. The `class` Syntax

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

let john = new Person("John");
john.greet(); // Output: "Hello, my name is John!"
```

- **Explanation**: ES6 introduced `class` as syntactic sugar over JavaScript's existing prototype-based inheritance. The `class` syntax provides a clearer and more concise way to create objects and deal with inheritance.

### 40. The `Set` Object

```javascript
let mySet = new Set([1, 2, 3, 4, 4, 4]);
console.log(mySet.size); // Output: 4
mySet.add(5);
console.log(mySet.has(5)); // Output: true
mySet.delete(1);
console.log(mySet.size); // Output: 4
```

- **Explanation**: `Set` is a collection of unique values. Duplicate values are not added to a set, which makes it useful for creating collections of unique items.

### 41. The `Map` Object

```javascript
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

console.log(myMap.size); // Output: 2
console.log(myMap.get('key1')); // Output: "value1"
myMap.delete('key1');
console.log(myMap.has('key1')); // Output: false
```

- **Explanation**: A `Map` holds key-value pairs where the keys can be any datatype. A `Map` remembers the original insertion order of the keys, which differentiates it from an Object.

### 42. Template String Tag Functions

```javascript
function tag(strings, ...values) {
  console.log(strings); // ["Hello ", ", you have ", " unread messages"]
  console.log(values); // ["John", 12]
  return "Processed template string";
}

let user = "John";
let messages = 12;

console.log(tag`Hello ${user}, you have ${messages} unread messages`);
// Output: Processed template string
```

- **Explanation**: Tagged template literals allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The subsequent arguments are related to the expressions.

### 43. Proxy Objects

```javascript
let target = {};
let proxy = new Proxy(target, {
  get(target, prop, receiver) {
    return `Property ${prop} doesn't exist.`;
  }
});

console.log(proxy.test); // Output: Property test doesn't exist.
```

- **Explanation**: The `Proxy` object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.). Here, any attempt to access a property on the proxy that doesn't exist in the target returns a custom message.

### 44. The `Reflect` API

```javascript
const obj = { x: 1, y: 2 };
console.log(Reflect.has(obj, 'x')); // Output: true
Reflect.deleteProperty(obj, 'y');
console.log(obj); // Output: { x: 1 }
```


- **Explanation**: The `Reflect` API provides methods for interceptable JavaScript operations. Here, `Reflect.has` checks if an object has a certain property, and `Reflect.deleteProperty` removes a property from an object.

### 45. Symbols for Unique Property Keys

```javascript
const uniqueId = Symbol('id');
const obj = {
  [uniqueId]: '12345'
};
console.log(obj[uniqueId]); // Output: "12345"
console.log(Symbol('id') === Symbol('id')); // Output: false
```


- **Explanation**: Symbols are a primitive data type introduced in ES6, used to create unique identifiers for object properties. Each time `Symbol()` is called, a new, unique symbol is created.

### 46. Iterators and Generators

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
```


- **Explanation**: Generators are a special class of functions that simplify the creation of iterators. A generator can pause midway and then continue from where it paused.

### 47. `async` Generators

```javascript
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})(); // Output: 1, then 2, then 3
```


- **Explanation**: `async` generators combine generators and promises. They allow you to `yield` promises that are awaited in a for-await-of loop.

### 48. Optional Chaining (`?.`)

```javascript
const obj = { a: { b: { c: 1 } } };
console.log(obj.a?.b?.c); // Output: 1
console.log(obj.x?.y?.z); // Output: undefined
```


- **Explanation**: Optional chaining (`?.`) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

### 49. Nullish Coalescing Operator (`??`)

```javascript
const foo = null ?? 'default string';
console.log(foo); // Output: "default string"

const baz = 0 ?? 42;
console.log(baz); // Output: 0
```


- **Explanation**: The nullish coalescing operator (`??`) returns the right-hand side operand when the left-hand side operand is `null` or `undefined`, and otherwise returns the left-hand side operand.

### 50. Dynamic Import

```javascript
(async () => {
  if (condition) {
    const module = await import('/path/to/module.js');
    module.doSomething();
  }
})();
```


- **Explanation**: Dynamic imports load modules dynamically with a call to `import()` returning a promise. This is useful for conditionally loading modules and for code splitting in applications.

### 51. BigInt for Large Integers

```javascript
const largeNumber = BigInt(9007199254740991);
const anotherLargeNumber = 9007199254740991n;

console.log(largeNumber + anotherLargeNumber); // Output: 18014398509481982n
```


- **Explanation**: `BigInt` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the `Number` primitive.

### 52. The `at()` Method for Strings and Arrays

```javascript
const array = [10, 20, 30, 40, 50];
console.log(array.at(-1)); // Output: 50

const string = 'JavaScript';
console.log(string.at(0)); // Output: "J"
```


- **Explanation**: The `at()` method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array or string.

n enhance your coding patterns and problem-solving strategies, especially in modern JavaScript development. Understanding these concepts can give you a significant edge in interviews and practical coding tasks.

### 53. Private Class Fields

```javascript
class MyClass {
  #privateField = 'private value';
  
  getPrivateField() {
    return this.#privateField;
  }
}

const instance = new MyClass();
console.log(instance.getPrivateField()); // Output: "private value"
console.log(instance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
```


- **Explanation**: Private class fields are a part of the class fields proposal. They are declared with a `#` prefix and can only be accessed within the class body. Attempting to access them outside the class results in a syntax error.

### 54. Top-Level `await`

```javascript
// In a module script
const dynamicValue = await fetch('https://api.example.com/data').then(response => response.json());

console.log(dynamicValue); // Output depends on the fetched data
```


- **Explanation**: Top-level `await` allows modules to act as big async functions. With it, you can use `await` at the top level of a module, pausing the execution of the module code until the awaited promise is resolved.

### 55. Logical Assignment Operators

```javascript
let a = 1;
let b = 0;

a &&= 2;
console.log(a); // Output: 2

b ||= 5;
console.log(b); // Output: 5

b ??= 7;
console.log(b); // Output: 5
```


- **Explanation**: Logical assignment operators combine logical operations with assignment. `&&=` only assigns if the left-hand side is truthy, `||=` assigns if the left-hand side is falsy, and `??=` assigns if the left-hand side is `null` or `undefined`.

### 56. `Array.prototype.flat()` and `flatMap()`

```javascript
const nestedArray = [1, [2, 3], [4, [5]]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, [5]]
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5]

const array = [1, 2, 3, 4];
console.log(array.flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```


- **Explanation**: `flat()` creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. `flatMap()` first maps each element using a mapping function, then flattens the result into a new array. It's essentially `map()` followed by `flat()` of depth 1.

### 57. `Promise.allSettled()`

```javascript
const promises = [
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success2')
];

Promise.allSettled(promises).then(results => console.log(results));
// Output: Array of objects, each indicating the status ("fulfilled" or "rejected") and value or reason
```


- **Explanation**: `Promise.allSettled()` takes an iterable of promises and returns a promise that resolves after all the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

### 58. `globalThis`

```javascript
console.log(globalThis); // Output: The global object (varies by environment)
```


- **Explanation**: `globalThis` provides a standard way to access the global `this` value across environments, including the browser, Node.js, and web workers, where different global objects (`window`, `global`, `self`) exist.

### 59. `String.prototype.matchAll()`

```javascript
const string = 'test1test2';
const regex = /t(e)(st(\d?))/g;
const matches = [...string.matchAll(regex)];

console.log(matches[0]); // Output: Array with the whole match and capturing groups for the first match
console.log(matches[1]); // Output: Array with the whole match and capturing groups for the second match
```


- **Explanation**: `matchAll()` returns an iterator of all results matching a string against a regular expression, including capturing groups.

### 60. `Intl` and Internationalization 


```javascript
// German locale
const date = new Date(Date.UTC(2020, 2, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('de-DE').format(date)); // Output: "20.3.2020" for German locale
```

- **Explanation**: The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language-sensitive string comparison, number formatting, and date and time formatting. `Intl.NumberFormat` and `Intl.DateTimeFormat` are constructors for objects that enable language-sensitive number and date/time formatting, respectively.

### 61. `WeakRef` and FinalizationRegistry

```javascript
let obj = {};
const weakRef = new WeakRef(obj);

(function() {
    const derefObj = weakRef.deref();
    if (derefObj) {
        console.log("Object is still alive!");
    } else {
        console.log("Object has been garbage collected.");
    }
})();

obj = null; // Now obj can be garbage collected at some point in the future

const registry = new FinalizationRegistry(value => {
    console.log(`The object with reference ${value} has been garbage collected.`);
});

registry.register(obj, 'obj');
```

- **Explanation**: `WeakRef` allows you to hold a weak reference to another object, without preventing that object from being garbage-collected. `FinalizationRegistry` provides a way to register a callback to be invoked after an object has been garbage collected. Note that the use of these features should be limited as they introduce potential memory management and performance issues.

### 62. `BigInt` Arithmetic

```javascript
const value1 = 9007199254740991n;
const value2 = BigInt(9007199254740991);

console.log(value1 + value2); // Output: 18014398509481982n
console.log(value1 * value2); // Output: 81129638414606663681390495662081n
```

- **Explanation**: `BigInt` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the `Number` primitive. `BigInt` can be used for arbitrarily large integers.

### 63. Modules: Import and Export

```javascript
// file: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// file: main.js
import { add, subtract } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
```

- **Explanation**: ES6 modules allow you to organize and reuse code across your projects. `export` is used to expose functions, objects, or primitives from a module so they can be used by other programs with the `import` statement.

### 64. `Array.prototype.reduce()`

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
```

- **Explanation**: The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. It's particularly useful for aggregating or accumulating values from an array.

### 65. `Proxy` for Property Validation

```javascript
const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value
        obj[prop] = value;
        return true;
    }
};

const person = new Proxy({}, validator);
person.age = 100;
console.log(person.age); // Output: 100
person.age = 'young'; // Throws TypeError: The age is not an integer
person.age = 300; // Throws RangeError: The age seems invalid
```

- **Explanation**: `Proxy` objects enable you to create a proxy for another object, which can intercept and redefine fundamental operations for that object, such as property lookup, assignment, enumeration, function invocation, etc. This example demonstrates using a `Proxy` for basic property validation.


I'm glad you're finding these examples useful! Here are more JavaScript concepts and examples to explore:

### 66. Using `Promise.race()`

```javascript
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // Output: "two"
});
```


- **Explanation**: `Promise.race()` takes an iterable of Promise objects and returns a single Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

### 67. The `Function.prototype.bind()`

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // Output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // Output: 42
```


- **Explanation**: `bind()` creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### 68. `Object.freeze()` and `Object.seal()`

```javascript
const obj = {
  prop: 42
};

Object.freeze(obj);
obj.prop = 33;
console.log(obj.prop); // Output: 42

const obj2 = {
  prop: 42
};

Object.seal(obj2);
obj2.prop = 33;
console.log(obj2.prop); // Output: 33
obj2.newProp = 'test';
console.log(obj2.newProp); // Output: undefined
```


- **Explanation**: `Object.freeze()` makes an object immutable, preventing new properties from being added to it and existing properties from being removed or changed. `Object.seal()` prevents new properties from being added to an object and marks all existing properties as non-configurable, but allows the modification of existing property values.

### 69. `Array.prototype.includes()`

```javascript
const array = [1, 2, 3];

console.log(array.includes(2));     // Output: true
console.log(array.includes(4));     // Output: false
console.log(array.includes(3, 3));  // Output: false
```


- **Explanation**: `includes()` determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate. It has an optional second argument to specify the position in the array at which to begin the search.

### 70. `String.prototype.startsWith()` and `endsWith()`

```javascript
const str = 'Saturday night plans';

console.log(str.startsWith('Sat')); // Output: true
console.log(str.endsWith('plans')); // Output: true
console.log(str.startsWith('Sat', 3)); // Output: false
```


- **Explanation**: `startsWith()` checks if the string starts with the specified substring, returning `true` or `false` as appropriate. Similarly, `endsWith()` checks if the string ends with the specified substring. Both methods have an optional second argument to specify the position at which to start or end the search.

### 71. `Array.from()`

```javascript
const set = new Set(['foo', 'bar', 'baz', 'foo']);
const array = Array.from(set);

console.log(array); // Output: ["foo", "bar", "baz"]
```


- **Explanation**: `Array.from()` creates a new, shallow-copied Array instance from an array-like or iterable object. This example demonstrates converting a `Set` to an `Array`, removing duplicate values in the process.

### 72. `Object.entries()` and `Object.values()`

```javascript
const obj = { a: 'somestring', b: 42 };

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
// Output: "a: somestring", "b: 42"

console.log(Object.values(obj)); // Output: ["somestring", 42]
```


- **Explanation**: `Object.entries()` returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs. `Object.values()` returns an array of a given object's own enumerable property values.

### 73. `Array.prototype.some()` and `every()`

```javascript
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even)); // Output: true
console.log(array.every(even)); // Output: false
```


- **Explanation**: `Array.prototype.some()` tests whether at least one element in the array passes the test implemented by the provided function, returning `true` or `false`. `Array.prototype.every()` tests whether all elements in the array pass the test implemented by the provided function.

### 74. `Number.isFinite()` and `Number.isNaN()`

```javascript
console.log(Number.isFinite(Infinity));  // Output: false
console.log(Number.isFinite(-Infinity)); // Output: false
console.log(Number.isFinite(NaN));       // Output: false
console.log(Number.isFinite(123));       // Output: true

console.log(Number.isNaN(NaN));          // Output: true
console.log(Number.isNaN(123));          // Output: false
console.log(Number.isNaN('NaN'));        // Output: false
console.log(Number.isNaN(undefined));    // Output: false
```


- **Explanation**: `Number.isFinite()` determines whether the passed value is a finite number. Unlike the global `isFinite()`, it doesn't forcibly convert the parameter to a number. This ensures only values of the type number, that are also finite, return `true`. `Number.isNaN()` determines whether the passed value is `NaN` and its type is `Number`. It is a more robust version of the original global `isNaN()`.

### 75. `Object.assign()`

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);        // Output: { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
```


- **Explanation**: `Object.assign()` is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

### 76. `Function.prototype.apply()`, `call()`, and `bind()`

```javascript
function greet(greeting, punctuation) {
  return greeting + ', ' + this.user + punctuation;
}

const context = { user: 'John' };

console.log(greet.apply(context, ['Hello', '!']));  // Output: "Hello, John!"
console.log(greet.call(context, 'Hello', '!'));    // Output: "Hello, John!"
const boundGreet = greet.bind(context, 'Hello', '!');
console.log(boundGreet());                         // Output: "Hello, John!"
```


- **Explanation**: `apply()`, `call()`, and `bind()` are used to set the `this` context of a function. `apply()` takes arguments as an array, `call()` takes arguments separately, and `bind()` returns a new function, allowing you to pass in a this array and any number of arguments.

### 77. `Promise.all()`

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);  // Output: [3, 42, "foo"]
});
```


- **Explanation**: `Promise.all()` takes an iterable of promises as an input, and it returns a single Promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

### 78. `Data Structures: Set`

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate, not added

mySet.has(1);    // Output: true
mySet.has(3);    // Output: false
mySet.size;      // Output: 2

mySet.delete(5);
console.log(mySet.size); // Output: 1
```


- **Explanation**: A `Set` is a collection of unique values. `Set` objects allow you to store unique values of any type, whether primitive values or object references. `Set` is useful for ensuring the uniqueness of the elements.


Certainly! Here are additional JavaScript examples to further enrich your understanding:

### 79. `Array.prototype.filter()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```



- **Explanation**: `filter()` creates a new array with all elements that pass the test implemented by the provided function. It's a great way to derive a subset of elements based on conditions.

### 80. `Array.prototype.reduceRight()`

```javascript
const array = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array); // Output: [4, 5, 2, 3, 0, 1]
```



- **Explanation**: Similar to `reduce()`, `reduceRight()` applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. It's particularly useful when order of operation is important in the reduction.

### 81. `Function.prototype.caller`

```javascript
function whoCalledMe() {
  console.log("Caller is:", whoCalledMe.caller);
}

function callerFunction() {
  whoCalledMe();
}

callerFunction();
// Output: Caller is: function callerFunction() { whoCalledMe(); }
```



- **Explanation**: The `caller` property of a function returns the function that invoked the specified function. It's a non-standard feature and its use is discouraged in strict mode and new JavaScript modules.

### 82. `Object.getOwnPropertyNames()`

```javascript
const object = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(object)); // Output: ["a", "b", "c"]
```



- **Explanation**: `Object.getOwnPropertyNames()` returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

### 83. `String.prototype.trimStart()` and `trimEnd()`

```javascript
const greeting = '   Hello world!   ';

console.log(greeting.trimStart()); // Output: "Hello world!   "
console.log(greeting.trimEnd());   // Output: "   Hello world!"
```



- **Explanation**: `trimStart()` removes whitespace from the beginning of a string, and `trimEnd()` removes whitespace from the end. They are more specific versions of `trim()` which removes whitespace from both ends of a string.

### 84. `URL` Objects

```javascript
const url = new URL('https://example.com:8000/path/name?query=123#hash');

console.log(url.hostname); // Output: "example.com"
console.log(url.pathname); // Output: "/path/name"
console.log(url.search);   // Output: "?query=123"
console.log(url.hash);     // Output: "#hash"
console.log(url.port);     // Output: "8000"
```



- **Explanation**: The `URL` constructor creates and returns a URL object representing the URL defined by the parameters. It provides properties that allow easy access to the parts of the URL.

### 85. `Array.prototype.find()`

```javascript
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find(fruit => fruit.name === 'cherries');

console.log(result); // Output: { name: 'cherries', quantity: 5 }
```



- **Explanation**: `find()` returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

### 86. `Promise.prototype.finally()`

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log("Promise finished."));
// Output: "result" followed by "Promise finished."
```



- **Explanation**: `finally()` returns a Promise. When the promise is settled, i.e., either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was successfully fulfilled or rejected.


improve your JavaScript coding skills and problem-solving capabilities. Here are more examples to explore:

### 87. `navigator.geolocation`

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});
```

- **Explanation**: The `navigator.geolocation` object provides access to the location of the device. This can be used to get the current position of the device.

### 88. `document.querySelector` and `document.querySelectorAll`

```javascript
const element = document.querySelector('.my-class');
console.log(element); // Output: the first element with the class "my-class"

const elements = document.querySelectorAll('.my-class');
console.log(elements.length); // Output: total number of elements with the class "my-class"
```

- **Explanation**: `document.querySelector` returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned. `document.querySelectorAll` returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

### 89. `localStorage` and `sessionStorage`

```javascript
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key')); // Output: "value"

sessionStorage.setItem('sessionKey', 'sessionValue');
console.log(sessionStorage.getItem('sessionKey')); // Output: "sessionValue"
```

- **Explanation**: Web Storage API provides mechanisms by which browsers can securely store key/value pairs. `localStorage` is for storing data with no expiration date, and the data will not be deleted when the browser is closed. `sessionStorage` is for storing data that gets cleared when the page session ends.

### 90. `fetch` API

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

- **Explanation**: The `fetch` API provides an interface for fetching resources (including across the network). It will seem familiar if you've used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

### 91. `async` and `await` with `fetch`

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

- **Explanation**: This example shows how to use `async` and `await` with the `fetch` API for making asynchronous HTTP requests. This syntax provides a more straightforward way to handle promises.

### 92. `Array.prototype.sort()`

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Output: ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort((a, b) => a - b);
console.log(array); // Output: [1, 4, 21, 30, 100000]
```

- **Explanation**: The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

### 93. `Array.prototype.map()` and `Array.prototype.forEach()`

```javascript
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(roots); // Output: [1, 2, 3]

numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});
// Output: "Index: 0, Value: 1", "Index: 1, Value: 4", "Index: 2, Value: 9"
```

- **Explanation**: `map()` creates a new array populated with the results of calling a provided function on every element in the calling array. `forEach()` executes a provided function once for each array element.



Certainly! Let's dive into more JavaScript concepts and examples to broaden your understanding:

### 94. Destructuring Assignment

```javascript
const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(name); // Output: "John Doe"
console.log(age);  // Output: 30

const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;
console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "green"
```


- **Explanation**: Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### 95. Template Literals

```javascript
const greeting = `Hello`;
const name = `John`;

console.log(`${greeting}, ${name}!`); // Output: "Hello, John!"
```


- **Explanation**: Template literals provide an easy way to interpolate variables and expressions into strings. The method is identified by the use of backticks rather than quotes.

### 96. Default Parameters

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet('John')); // Output: "Hello, John!"
console.log(greet());       // Output: "Hello, Guest!"
```


- **Explanation**: Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

### 97. Spread Operator

```javascript
const parts = ['shoulders', 'knees'];
const body = ['head', ...parts, 'toes'];

console.log(body); // Output: ["head", "shoulders", "knees", "toes"]
```


- **Explanation**: The spread operator `...` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

### 98. Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
```


- **Explanation**: Rest parameters allow us to represent an indefinite number of arguments as an array, providing a way to handle function parameters more flexibly.

### 99. Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6]
```


- **Explanation**: Arrow functions provide a concise syntax for writing function expressions. They utilize the `=>` syntax and are often more readable and succinct.

### 100. Promises and `async`/`await`

```javascript
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("data"), 1000));
}

async function main() {
  const data = await fetchData();
  console.log(data); // Output: "data" after 1 second
}

main();
```


- **Explanation**: Promises are used to handle asynchronous operations in JavaScript. They are used to handle asynchronous computations which can then be composed with callbacks. `async`/`await` syntax provides a more comfortable abstraction over working with promises, allowing asynchronous code to be written in a more synchronous fashion.

### 101. Modules

```javascript
// file: math.js
export const add = (a, b) => a + b;

// file: app.js
import { add } from './math.js';

console.log(add(2, 3)); // Output: 5
```


- **Explanation**: JavaScript modules allow you to break up your code into separate files, making it more manageable and maintainable. This also allows you to reuse code across your projects. ES6 introduced a standard module system that supports exporting and importing values between modules.






