/*
Maps and then returns a flattened array
*/

//Example 1

const num = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

console.log(num.flatMap((x) => x)) // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [ 9, 10 ] ] ] ]

//Example 2

console.log(num.flatMap((x) => x, 2)) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]

//Example 3

console.log(num.flatMap((x) => x, 3)) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
