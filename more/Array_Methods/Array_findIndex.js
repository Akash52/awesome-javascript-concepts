/*
 It returns the index of an element found and which satisfies the test 
 function passed as an argument or -1 if none satisfies it.
*/

const fruits = ['apple', 'banana', 'orange']

//Example 1

console.log(fruits.findIndex((fruit) => fruit === 'banana')) // 1

//Example 2

console.log(fruits.findIndex((fruit) => fruit === 'grape')) // -1

//Example 3

console.log(fruits.findIndex((fruit) => fruit === 'orange')) // 2
