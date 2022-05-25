/*
This method tests the array with a function passed as a parameter. 
It will return true if at least one element matches the test and false 
for the opposite.

*/

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits.includes((fruit) => fruit.length > 5)) // true
console.log(fruits.some((fruit) => fruit.length > 5)) // true

//Array Includes vs Array Some
//Array includes is used to check if an array contains a certain element.
//Array some is used to check if at least one element in the array matches a certain condition.
