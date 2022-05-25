/*
The splice() method changes the contents of an array by removing or replacing existing
elements and/or adding new elements

The original array gets mutated with remaining items after deletion

Syntax :

let arrDeletedItems = arr.splice(start, deleteCount, item1, item2, ...)

*/

// Example 1

const avengers = [
  'captain america',
  'ironman',
  'thor',
  'hulk',
  'black widow',
  'hawkeye',
]
console.log(avengers.splice(2, 2)) // ['thor', 'hulk']
console.log(avengers) // ['captain america', 'ironman', 'black widow', 'hawkeye']
console.log(avengers.splice(2, -1)) // ['black widow', 'hawkeye']

//Example 2

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

console.log(months.splice(2, 0, 'march', 'april')) // []
console.log(months) // ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
console.log(months.splice(2, 1, 'march', 'april')) // ['march']
