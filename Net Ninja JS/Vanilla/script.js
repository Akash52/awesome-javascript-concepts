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

//4. Template strings

const title = 'Beast reads of 2019'
const author = 'Mario'
const likess = 30

// concatenation way

//let resulte ='The blog callled ' + title + 'by' + author + 'has' + likess + 'likess'

// template string way

//let _result = `The blog called ${title} by ${author} has ${likes} likes`
//console.log(_result)

// creating html template

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This is blog has ${likes} likes</span>`

console.log(html)

//5. Arrays

let ninjas = ['abc', 'def', 'jhi', 'jkl']

ninjas[0] = 'ken'
console.log(ninjas[0])

let ages = [23, 34, 2, 3, 34]
console.log(ages[1])

let random = ['show', 'look', '23', '3']
console.log(random)

console.log(random.length)

// Array methods

//let result_ = ninjas.join('-') //join together
//let result_ = ninjas.indexOf('def')
//let result_ = ninjas.concat('kne', 'crystal')
//let result_ = ninjas.push('kne')

result_ = ninjas.pop()
console.log(ninjas)

//6. Null & Undefined

//let agee
let agee = null

console.log(agee, agee + 3, `the age is ${agee}`)

//7. Booleans & Comparision

console.log(true, false)

// Methods can return booleans

let eemail = 'abc@gmail.com'
//let result = eemail.includes('@')
//console.log(result) // True becase include @ symbol
let names = ['ABC', 'bowser', 'DEF']
//let result = eemail.includes('@')
let result = names.includes('A')
console.log(result)

// Comparison Operators

let ege = 25
// console.log(ege == 25) // True
// console.log(ege == 30) // False
// console.log(ege != 35) // True
// console.log(ege > 20) //True
// console.log(ege < 20) // False
// console.log(ege <= 25) // True
// console.log(ege >= 25) //True

let namee = 'jhone'

// console.log(namee == 'jhone')
// console.log(namee == 'jhone')
// console.log(namee < 'skykkk')
// console.log(namee < 'Akashbbb')

//Loose comparison (different types can still be equal)
let num1 = 25
// console.log(num1 == 25)
// console.log(num1 == '25')
// console.log(num1 != 25)
// console.log(num1 != '25')

//strict comparison (different types cannot be equal)

console.log(num1 === 25)
console.log(num1 === '25')
console.log(num1 !== 25)
console.log(num1 !== '25')
