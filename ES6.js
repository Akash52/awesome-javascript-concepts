/*
//Array helper Method

// forEach, map, filter, find, every, some & Reduce

//1. forEach
let colors = ['Red', 'Blue', 'Green']

colors.forEach(function (color) {
  console.log(color)
})

//Creat an array of numbers
let numbers = [1, 2, 3, 4, 5]
//Create a Variable to hold them
let sum = 0
//Loop over the array, icreamenting the sum variables
numbers.forEach(function (number) {
  sum += number
})
// print the sum of varaible

console.log(sum) //Output 15

//2. map

let numbbers = [1, 2, 3, 4]

let doubled = numbbers.map(function (number) {
  return number * 2
})
console.log(doubled) //Output : 2,4,6,8

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map((sweetItem) => {
  return sweetItem * 2
})

console.log(sweeterArray)

//This output is logged to the console:

Output[(4, 6, 8, 10, 70)]

//Example

const objects = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 },
]

let onlybs = objects.map((object) => {
  return object.b
})

console.log(onlybs)
*/
