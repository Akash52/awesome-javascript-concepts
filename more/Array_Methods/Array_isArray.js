// Array isArray method is used to check if an object is an array.

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

const isArray = Array.isArray(fruits)
console.log(isArray) // true

const person = {
  name: 'John',
  age: 30,
}

console.log(Array.isArray(person)) // false
