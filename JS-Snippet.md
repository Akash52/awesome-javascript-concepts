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
