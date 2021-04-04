//1.Print Element & Erro
console.log('Hello World')
console.error('this error')
console.warn('sdsd')

//2.Variable var,let,const

//-->Let Re-Assign Value
let age = 30
age = 31
console.log(age)
//-->Const Does not assign value
const old = 30
age = 31
console.log(old)
//3.Data Type String,Number,Boolean,null,undefined,Symbol
const name = 'Akash'
const num = 30
const rating = 4.5
const isCoool = true
const x = null
const y = undefined
let z
console.log(typeof name)
console.log(typeof num)
console.log(typeof rating)
console.log(typeof isCoool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

//4.String Operation
//-->Old Way Concatenation
console.log('My name is' + name + ' and my age is :' + age)
//-->New Way Template String
const hello = `My Name is ${name} and i am ${age}`
console.log(hello)
const s = 'Hello World'
console.log(s.length)
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.substring(0, 5).toUpperCase())
console.log(s.split(''))

//5.Arrays -variable that hold multiple Values
/*multi Line Comment 
Hi How are you*/
const numbers = new Array(1, 2, 3, 4, 5)
console.log(numbers)

//-->Array Multiple Data Type Supprt in single variabl
const fruits = ['Apple', 'Orange', 'Mango', 'Graps', 30, 40]
console.log(fruits)

//-->You can Also Manupulate your Array
fruits[3] = 'Banana'
console.log(fruits)

//Array index always start with 0
console.log(fruits[1])

//You can also PUSH Element in Array
fruits.push('Pinaple')

//Element Add in Starting
fruits.unshift('Watermalon')

//Find Index Number
console.log(fruits.indexOf('Mango'))

//6.Object And Literals

const person = {
  fisrtname: 'Akash',
  lastName: 'Chauhan',
  age: 20,
  hobbies: ['music', 'sports'],
  addess: {
    street: 'Bhapara',
    Village: 'Gheti',
    state: 'Gujarat',
  },
}
console.log(person)

//You can Also Acces Separate Value
console.log(person.fisrtname, person.lastName)
console.log(person.hobbies[1])
console.log(person.addess.Village)

//You can Add New Property

person.email = 'ac8572611@gmail.com'
console.log(person)

//Using Array Todo LIST

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Program Done',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'JAVASCRIPT',
    isCompleted: false,
  },
]

console.log(todos)

console.log(todos[0].text)

//For Loops

for (let i = 0; i < 5; i++) {
  console.log(`For loop number:${i}`)
}

//While Loop

let i = 0
while (i < 10) {
  console.log(`whilw loop no:${i}`)
  i++
}

//Compare == & ===
const c = '10'

if (c === 10) {
  console.log('x is 10')
}
const d = 10
if (d == 10) {
  console.log('d is 10')
}

//Terniary Operator

const e = 11
const color = e > 10 ? 'red' : 'blue'

//Switch Statement

switch (color) {
  case 'red':
    console.log('color is red')
    break
  case 'blue':
    console.log('color is blue')
    break
  default:
    console.log('color is NOT red or blue ')
    break
}

// function

function addSum(num1, num2) {
  console.log(num1 + num2)
}
addSum(5, 7)

//Arrow Function
const Addsum = (n1, n2) => {
  console.log(n1 + n2)
}
Addsum(5, 8)

//Consructor function

function Person(Fisrtname, LastName, Dob) {
  this.Fisrtname = Fisrtname
  this.LastName - LastName
  this.Dob = new Date(Dob)
}

//Instantiate object

const p1 = new Person('Akash', 'Chauhan', '15-08-200')
const p2 = new Person('Jigar', 'Chauhan', '3-6-2000')
console.log(p1)
console.log(p2.Dob.getFullYear())

//Class
class P3 {
  constructor(Fisrtname, LastName, Dob) {
    this.Fisrtname = Fisrtname
    this.LastName - LastName
    this.Dob = new Date(Dob)
  }

  getBirthYear() {
    return this.Dob.getFullYear()
  }
  getFullYear() {
    return this.getFullYear()
  }
}

//Arrow Functions

//Single Expression
var add = (a, b) => a + b
//Single Argument
var odd = (n) => n % 2
//No Arguments
var random = () => Math.random()
//Multiple Expressions
var shout = (s) => {
  s = s.toUpperCase()
  s = s + '!'
  return s
}

//Lexical this

function Counter() {
  this.count = 0
  setInterval(() => this.count++, 1000)
}

var counter = new Counter()
