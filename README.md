# JavaScript A-to-Z <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"></h2>
![](https://img.shields.io/badge/language-javascript-yellow.svg)

## In these repository you will find basic to andvance JavaScript concept !!!

### Index :

<!-- toc -->

  * [console log](#console-log)
  * [DataType,Naming,Rules](#sDataType-Naming-Rules)
  * [No Arguments](#no-arguments)
  * [Multiple Expressions](#multiple-expressions)
  * [Lexical this](#lexical-this)
  * [Concise Functional Iteration](#concise-functional-iteration)

<!-- tocstop -->
### console log
```javascript
//Log to consloe 
console.log('Hello world');
console.log(123);
console.log(true)
var greeting='Hello';
console.log(greeting);
console.log(1,2,3,4);
console.log({a:1,b:2});
console.log({a:1,b:2});
console.error("This is some errror");
console.clear();
console.warn();
console.time('Hello'); //Function start
console.log('Hello world');
console.log('Hello world');
console.log('Hello world'); //Display script taken time
console.log('Hello world');
console.log('Hello world');
console.timeEnd('Hello'); //Function End

/*
multi
line
comments
*/
```
### DataType,Naming,Rules
```javascript

//var,let,const

var name="Akash Doe";
console.log(name);
name="Steave smith"; //Re-assing variable
console.log(name);

//Initialize variable

var greeting;
console.log(greeting); //undefined error
greeting='Hello';
console.log(greeting);

//Letters,Numbers,_ string ,variable rules
Can not start with number
var 1name='John'; //Return error
var _name='John'; //these is valid

//Multi word vars

var firtsName='Akash'; //Camel case
var first_name='Sara';  //Underscore
var FirstName='Tome';   // Pascal case
var firstname; //Not recomneded 

//LET
let name;
let name="Akash Doe";
console.log(name);
name="Steave smith"; //Re-assing variable
console.log(name);

//Const

const name="Akash Doe";
console.log(name);
name="Steave smith"; // can't Re-assing variable
const greeting;

Const
const Person={
    name: 'Akash',
    age : '20'
}
Person.name='Sara';
Person.age='30';

console.log(Person);

const numbers=[1,2,3,4,5];
numbers.push(6);

console.log(numbers);
```
