// Array from method is used to create a new array from an array-like object.

//Example 1

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
const freshFruits = Array.from(fruits) //Creates a new shallow copy of the array
console.log(freshFruits) // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits === freshFruits) // false
