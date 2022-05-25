// The Array.of() method creates a new Array instance from a variable number of arguments,
// regardless of number or type of the arguments.

//ES6

console.log(Array.of(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]
console.log(Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Array.of('a', 'b', 'c', 'd', 'e')) // ["a", "b", "c", "d", "e"]

//Polyfill using Array.prototype

Array.of2 = function () {
  let vals = []
  for (let i = 0; i < arguments.length; i++) {
    vals[i] = arguments[i]
  }
  return vals
}

console.log(Array.of2(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]
