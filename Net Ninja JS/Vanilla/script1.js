// // Function declaration

// function greet() {
//   console.log('Hello There')
// }

// //function expression

// /*we can not do these bcz javascript does not Hoisting
// function expresssion*/

// const speak = function () {
//   console.log('Good day !')
// }

// greet() // calling or invoking fuction
// greet()
// greet()

// speak() // we can also call function multiple time
// speak()
// speak()

// //function hoisting in

// /*
// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution
// */

// function greet() {
//   console.log('Hello There')
// }

//Arguments & Parameters

// const speak = function (name = 'sky', time = 'night') {
//   // Parameters
//   console.log(`Good ${time} ${name}`)
// }

// speak('jhon doe', 'Morning') // Arguments
// speak() // if we can not pass value than its log default value
// speak('jhone doe') // second argument automatic pass

// Returning value

// const calcArea = function (radius) {
//   let area = 3.14 * radius ** 2
//   //console.log(area)
//   return area
// }
// const area = calcArea(5)
// console.log(area)
//calcArea(5)
//console.log(area)// not work bcz area has local scope

// Arraw function

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2
// }

//Simple way write
const calcArea = (radius) => 3.14 * radius ** 2

const area = calcArea(5)
console.log('area is : ', area)

const name = 'shaun'

// Functions

const greet = () => 'Hello'

let resultOne = greet()

console.log(resultOne)

// Methods

let resultTwo = name.toUpperCase()

console.log(resultTwo)
