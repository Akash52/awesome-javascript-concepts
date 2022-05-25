/*
This method creates a new array that contains the elements holden on the
sub-array and flat it into the new array. Notice that, 

! This method will go only one level depth.
*/

const num = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

console.log(num.flat()) // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]

// Example 2

console.log(num.flat(2)) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]

// Example 3

console.log(num.flat(3)) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]

// Example 4

console.log(num.flat(4)) // [1, 2, 3, 4,  5,6, 7, 8, 9, 10]

// Using Recursion

let result = []

const inputArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

function flattenArray(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element)
    } else {
      result.push(element)
    }
  })
  return result
}

console.log(flattenArray(inputArray))

inputArray.forEach((element) => {
  if (Array.isArray(element)) {
    flattenArray(element)
  } else {
    result.push(element)
  }
})

console.log(result)
