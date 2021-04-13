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
