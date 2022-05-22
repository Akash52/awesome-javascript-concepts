/*
This method will merge two or more arrays/values by concatenating it. 
It returns a new array with the elements.
*/

//Example 1

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]

console.log(array1.concat(array2, array3))

//Output
/*
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*/

//Example 2

const animals = ['dog', 'cat', 'bird']
const fruits = ['apple', 'banana', 'orange']
const vegetables = ['carrot', 'tomato', 'potato']

console.log(animals.concat(fruits, vegetables))

//Output
/*
[ 'dog', 'cat', 'bird', 'apple', 'banana', 'orange', 'carrot', 'tomato', 'potato' ]
*/
