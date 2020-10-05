# JavaScript A-to-Z <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"></h2>
![](https://img.shields.io/badge/language-javascript-yellow.svg)

## In these repository you will find basic to andvance JavaScript concept !!!

### Index :

<!-- toc -->

  * [console log](#console-log)
  * [DataType,Naming,Rules](#DataType-Naming-Rules)
  * [Datatype,PRIMITIVE & REFERENCE](#Datatype-PRIMITIVE-REFERENCE)
  * [Type conversion](#Type-conversion)
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
### DataType Naming Rules
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

### Datatype PRIMITIVE REFERENCE
```javascript
//PRIMITIVE

//String
const name = 'John doe';
//Number
const age = 45;
//Boolean
const hask = true;
//Null
const car = null;
//Undefined
let test;
//Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hask);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);

//REFERENCE

//Array
const hobbies = ['movie', 'music'];
//Object literal
const address = {

    city: 'Rajkot',
    state: 'GUj'

}

console.log(typeof hobbies);
console.log(address);
const today = new Date();
console.log(today);
```
### Type conversion
```javascript
let val;
//Number to string
val = String(555);
val = String(4 + 4);
//Bool to string
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1, 2, 3, 4]);
//toString()
val = (5).toString();
val = (true).toString();

//Stirng to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3, 4, 5]);


val = parseInt('100'); //Only return integer
val = parseFloat('100.4646'); //Return Float value


//String concersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

//Output 
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());
```
