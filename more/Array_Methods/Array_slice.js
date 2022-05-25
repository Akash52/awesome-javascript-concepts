/**
The slice() method returns a new array from start index to end index without changing the source array

It takes 2 parameters which are completely optional:
start - starting index from where array needs to be sliced
end - last index till where array needs to be sliced (doesn't include the last index)

Syntax :

let newArray = arr.slice(start, end)

**/

const fastFood = ['Pizza', 'Burger', 'Pasta', 'Noodles', 'Sandwich', 'Fries']

//Example 1
console.log(fastFood.slice(0, 2)) // ['Pizza', 'Burger']

//Example 2
console.log(fastFood.slice(2, 4)) // ['Pasta', 'Noodles']

//Example 3
console.log(fastFood.slice(2, -1)) // ['Pasta', 'Noodles', 'Sandwich', 'Fries']

//Example 4
console.log(fastFood.slice(2, -2)) // ['Pasta', 'Noodles']

//Example 5

const avengers = [
  'captain america',
  'ironman',
  'thor',
  'hulk',
  'black widow',
  'hawkeye',
]

console.log(avengers.slice(2, 4)) // ['thor', 'hulk']
console.log(avengers.slice(2, -2)) // ['thor', 'hulk', 'black widow', 'hawkeye']
console.log(avengers.slice(2, -1)) // ['thor', 'hulk', 'black widow', 'hawkeye']
