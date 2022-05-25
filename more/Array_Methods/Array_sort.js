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

//Example 2

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

function sortByName(a, b) {
  return a.name > b.name ? 1 : -1
}

console.log(items.sort(sortByName))

function sortByValue(a, b) {
  return a.value - b.value
}
console.log(items.sort(sortByValue))

//Example 3
// Array is converted to a array of objects
// A comparision function is fed to sort

let list = ['Delta', 'alpha', 'CHARLIE', 'bravo']

// Temporary array holds objects with position and sort-value
var mapped = list.map((item, index) => {
  return {
    index: index,
    value: item.toLowerCase(),
  }
})

console.log(mapped) // [ { index: 0, value: 'delta' }, { index: 1, value: 'alpha' }, { index: 2, value: 'charlie' }, { index: 3, value: 'bravo' } ]

// Sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  return a.value > b.value ? 1 : -1
})
console.log(mapped) // [ { index: 2, value: 'charlie' }, { index: 3, value: 'bravo' }, { index: 0, value: 'delta' }, { index: 1, value: 'alpha' } ]
