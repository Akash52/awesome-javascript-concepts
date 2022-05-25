const unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unsortedArray.sort())
// Sorted array is built by converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// In order to sort, we have to pass a comparision function

//A comparision function is a function that takes two arguments and returns a number.

//Ascending order

function compareNumbers(a, b) {
  return a - b
}

//Descending order

function compareNumbers2(a, b) {
  return b - a
}

let sortedArray = unsortedArray.sort(compareNumbers)

//Shorter version

rightArray = unsortedArray.sort((a, b) => a - b)

console.log(sortedArray)
console.log(rightArray)
