//1.Variables, Constants & Comments
let age = 25
let year = 2021
console.log(age, year)

age = 30
console.log(age)

const points = 100
/* points = 50 ->We can't re-assign varialbe */
console.log(points)

/* Old way creating variable */
var score = 75
console.log(score)

//2.Strings
console.log('Akash Chauhan')

let email = 'abc@gmail.com'
console.log(email)

// string concatenation
let firsName = 'Jhone'
let lastName = 'Doe'

let fullname = firsName + ' ' + lastName
console.log(fullname)

// getting characters

console.log(fullname[0])

// string length

console.log(fullname.length)

// string methods

console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

let index = email.indexOf('@')
console.log(index)

// Common string methods

let emaill = 'mario@gmail.com'

//let result = emaill.lastIndexOf('a')

//let result = emaill.slice(2, 5) // 2 to 5 return

//let result = emaill.substr(4, 6) // 4 to + 6 character return

//let result = emaill.replace('m', 'w')

//let result = emaill.replace('a', 'w')

//console.log(result)

//3. Numbers

let radius = 10
const pi = 3.14

//console.log(radius, pi)

//math operators +,-,*,/,**,%

//let result = radius % 3
//let result = pi * radius ** 2

//Order of Opeartion - B I D M AS

//let result = 5*(10-3)**2;

let likes = 10

//likes = likes + 1
//likes++
//likes --

//likes +=10;
//likes -=5;
//likes *=2;
//likes /=2;

//NaN - not a number
//console.log(5 / 'hello')
