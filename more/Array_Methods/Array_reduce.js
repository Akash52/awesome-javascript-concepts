/*
This method receives a function which has an accumulator and a value as an 
argument. It applies the function to the accumulator and each value in the 
array to return at the end just a single value.
*/

const num = [1, 2, 3, 4, 5]

let result = num.reduce((acc, val) => acc + val)
console.log(result)

// Example 2

let result2 = num.reduce((acc, val) => acc + val, 10)
console.log(result2) // 25

//Example 3

let result3 = num.reduce((acc, val) => acc + val, 0)
console.log(result3) // 15

//EXAMPLE 4
let result4 = num.reduce((acc, val) => acc + val, 1)
console.log(result4) // 15
