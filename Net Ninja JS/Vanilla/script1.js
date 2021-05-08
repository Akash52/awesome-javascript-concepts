// Function declaration

function greet() {
  console.log('Hello There')
}

//function expression

/*we can not do these bcz javascript does not Hoisting 
function expresssion*/

const speak = function () {
  console.log('Good day !')
}

greet() // calling or invoking fuction
greet()
greet()

speak() // we can also call function multiple time
speak()
speak()

//function hoisting in

/*
Hoisting is a JavaScript mechanism where variables and function declarations 
are moved to the top of their scope before code execution
*/

function greet() {
  console.log('Hello There')
}
