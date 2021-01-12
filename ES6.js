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

console.log(sum)
