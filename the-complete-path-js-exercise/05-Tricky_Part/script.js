//SCOPE
//What is scope in JavaScript MDN? The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use
//were we have access to over variable
//Three types of scope
//1.global 2.function 3.block

//Global Scope

// const name = 'jhone'

// const logName = () => {
//   console.log(name)
// }
// logName()

//Hoisting in JavaScript

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(age)
// var age = 20

// function hoist() {
//   console.log(message)

//   var message = 'test'
// }
// hoist()

// hoist()
// function hoist() {
//   var message = 'test'
//   console.log(message)
// }

// hoist()
// const hoist = () => {
//   var message = 'test'
//   console.log(message)
// }

//Closures in JavaScript
//a closure gives you access to an outer function's scope from an inner function.

// const outer = () => {
//   const outerVar = 'Hello!'
//   function inner() {
//     const innerVar = 'Hi!'
//     console.log(outerVar, innerVar)
//   }
//   return inner
// }

// outer()()

// const init = () => {
//   const hobby = 'Learning JS'
//   const displayHobby = () => {
//     console.log(hobby)
//   }
//   displayHobby()
// }
// init()
