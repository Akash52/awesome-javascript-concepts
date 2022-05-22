/**** Definition ****
 Fills the array with specified value
 ******************/

/**** Syntax *****
 array.fill(value, start, end);
******************/

const fruits = ['apple', 'banana', 'orange']

//fill the array with 'pear'
const result = fruits.fill('pear') // ['pear', 'pear', 'pear']

//fill the array with 'pear' from index 1 to index 2
const result2 = fruits.fill('pear', 1, 2) // ['apple', 'pear', 'orange']

// Override #1
const result3 = fruits.fill('pear', 1, 2) // ['apple', 'pear', 'orange']

// Override #2
const result4 = fruits.fill('pear', 1) // ['apple', 'pear', 'pear', 'pear', 'pear']

// Override #3
const result5 = fruits.fill('pear', 1, 3) // ['apple', 'pear', 'pear', 'orange']

const arr = Array(5).fill(0) // [0, 0, 0, 0, 0]

// Create an object with empty array

console.log([].fill.call({ length: 5 }, 'a')) // {0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a'}

// Create Using Array()

Array(5).fill(0) // [0, 0, 0, 0, 0]
