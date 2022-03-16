// var varableName = 'Welcome To Variables'
// console.log(varableName)

//Data Types

/*------String--------*/

const exampleString = 'Hello,World'
console.log(exampleString)

//Note
/*
    In JavaScript There are three types of string :
    1. Single Qoute
    2. Double Quote
    3. Backtick
*/

//1.Single Quote String

// const singleQuotes = 'Hello!'
// console.log(singleQuotes)

//2.Double Quotes String

// const doubleQuotes = 'Hello!'
// console.log(doubleQuotes)

//3. Template String

// const name = 'Jhone'
// const templateString = `Hello! ${name}`
// console.log(typeof templateString)

/*------Numbers--------*/

// const wholeNumber = 5555
// const decimalNumber = 0.5

// console.log(wholeNumber)
// console.log(decimalNumber)

//We can perform various arithmatic operation

// const result = wholeNumber / decimalNumber
// console.log(result)

//NaN - Not an Number

// const string = 'Hello'
// const number = 10

// const output = string / number
// console.log(typeof output)

/*------Booleans--------*/

//true - Yes , Correct , 1
//false - no , Incorrect , 0

// const isCool = true
// console.log(typeof isCool)

// if (isCool) {
//   console.log("Hi man,you're cool")
// } else {
//   console.log('Oh, hi...')
// }

// const age = 20
// console.log(age > 18)

/*------Null--Undefined------*/

//Null

// const age = null
// console.log(typeof age)

//Output : Object

//Undefined

/*
    if variable is declare but we can not assign 
    then return undefined
*/

// let x
// console.log(typeof x)

/*------Objects------*/

//Object is used for store collection of data and more entities

// const name = 'Jhone'
// const age = '25'

// const person = {
//   name: 'Jhone',
//   age: 25,
// }

// console.log(person)
//Using dot notation we access particular property
// console.log(typeof person.name)
// console.log(typeof person.age)

//Arrays

// const arr = [1, 2, 3, 4, 5]
// console.log(typeof arr)
//Output - Object

//Date

// const date = new Date()
// console.log(typeof date)
//Output - Object

/*----JavaScript is Dynamically typed Language ---*/

//Statically typed

// let message = 'Hello ,World!'
// console.log(typeof message)
//Output : String

// message = 51
// console.log(typeof message)
//Output : Number

//Dynamically typed
