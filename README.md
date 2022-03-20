# JavaScript A-to-Z <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"></h2>
![](https://img.shields.io/badge/language-javascript-yellow.svg)

## In these repository you will find basic to advance JavaScript concept's !!!

### Index :


<!-- toc -->

  * [Console log](#console-log)
  * [DataType,Naming,Rules](#DataType-Naming-Rules)
  * [Datatype,PRIMITIVE & REFERENCE](#Datatype-PRIMITIVE-REFERENCE)
  * [Type conversion](#Type-conversion)
  * [Numbers  & Math object](#Numbers-Math-object)
  * [String and its operation](#string-and-its-operation)
  * [Object and Literals](#object-and-literals)
  * [Date and time](#Date-and-time)
  * [Coditional-Statement](#Coditional-Statement)
  * [Function declaration](#Function-declaration)
  * [Ajax & XHR Methods](#Ajax-and-XHR-Methods)
  * [Working with AJAX and JSON](#Working-with-AJAX-and-JSON)
  * [Getting data from an External API](#Getting-data-from-an-External-API)



  

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

//Boolean
console.log(true, false)

// Methods can return booleans

let eemail = 'abc@gmail.com'
let result = eemail.includes('@')
console.log(result) // True becase include @ symbol
let names = ['ABC', 'bowser', 'DEF']
let result = eemail.includes('@')
let result = names.includes('A')
console.log(result)

// Comparison Operators

let ege = 25
console.log(ege == 25) // True
console.log(ege == 30) // False
console.log(ege != 35) // True
console.log(ege > 20) //True
console.log(ege < 20) // False
console.log(ege <= 25) // True
console.log(ege >= 25) //True
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

//String to Number
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
### Numbers Math object
```javascript
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math object

val = Math.PI;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(16);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 3, 4, 5, 4, 6);
val = Math.max(45, 34, 54, 5);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
```

### string and its operation

```javascript

const firstname = 'Akash';
const lastname = 'Chauhan';
let val;
val = firstname + lastname;

//Concatenation

val = firstname + '' + lastname;

```

//Append
val = 'Brad';
val += 'Traversy';
const age=50;
const str='Hello there my name is Akash';

val = 'Hello,my name is' + firstname + 'and I am ' + age;
const tags='web design,web development,full stack,mean stack,mern stack';

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val=firstname.length;

//concat
val=firstname.concat(' ',lastname);

//Change case
val=firstname.toUpperCase();
val=lastname.toLowerCase();

//Sub string
val=firstname.substring(0,4);

//slice
val=firstname.slice(0,4); 
val=firstname.slice(-3); //you can use negative number

//Split
val=str.split(' ');
val=tags.split(',')

//Replace
val=str.replace('Akash','jack');

//Include
val=str.includes('Hello'); //If available then return true
val=str.includes('foo');  //if not false

console.log(val);

//Net Ninja
// Common string methods

let emaill = 'mario@gmail.com'

let result = emaill.lastIndexOf('a')

let result = emaill.slice(2, 5) // 2 to 5 return

let result = emaill.substr(4, 6) // 4 to + 6 character return

let result = emaill.replace('m', 'w')

let result = emaill.replace('a', 'w')

console.log(result)

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

```

### Template string
```javascript

const name='Jhon';
const age='30';
const job='Web Developer';
const city='Rajkot';
let html;

//Without template string (es5)

html='<ul><li>Name :'+ name +'</li><li>Age:'+ age + '</li><li>Job:'+job+'</li><li>City:'+city+'</li></ul>';
document.body.innerHTML=html;

//With template string (es6)

function hello(){
    return 'hello how are you';
}

html=`
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${hello()}</li>
<li>${age>30 ? 'Over 30':'Under 30'}</li>
</ul>
`;

document.body.innerHTML=html;
```
### Create some arrays

```javascript
const numbers=[42,34,45,33,32,34,43];
const num2= new Array(22,34,433,3,43,43);
const fruit=['Apple','Banana','Orange','Pear'];
const mixed=[24,24,54,'Akash',44,'Chauhan',true,undefined,null];
```

#### Get array length
```javascript
val=numbers.length;
```
#### Check if is array
```javascript
val = Array.isArray(numbers);
```
#### Get single value 
```javascript
val=numbers[3];
val =numbers[0];
```
### Insert into array
```javascript
numbers[2]=100;
```
#### Find index of value
```javascript
val=numbers.indexOf(43);
```

### MUTING ARRAYS

#### Add on to end
```javascript
numbers.push(250);
```
#### Add on to front
```javascript
numbers.unshift(120);
```
#### Take of from end
```javascript
numbers.pop();
```
#### Take from front
```javascript
numbers.shift();
```
#### Splice values
```javascript
numbers.splice(1,3);
```
#### reverse
```javascript
numbers.reverse();
```
#### Concatenate array
```javascript
val=numbers.concat(num2);
```
#### Sorting array
```javascript
val=numbers.sort();
val=fruit.sort();
```
#### Use the "compare funtion"
```javascript
val=numbers.sort(function(x,y){
    return x-y;
});
````

#### Find
```javascript
function under50(num){
    return num<50;
}
val =numbers.find(under50);
```

//Net Ninja

let ninjas = ['abc', 'def', 'jhi', 'jkl']

ninjas[0] = 'ken'
console.log(ninjas[0])

let ages = [23, 34, 2, 3, 34]
console.log(ages[1])

let random = ['show', 'look', '23', '3']
console.log(random)

console.log(random.length)

// Array methods

let result_ = ninjas.join('-') //join together
let result_ = ninjas.indexOf('def')
let result_ = ninjas.concat('kne', 'crystal')
let result_ = ninjas.push('kne')

result_ = ninjas.pop()
console.log(ninjas)

```

### object and literals
```javascript
const Person={
    firstname:'Steav',
    lastname:'Smith',
    age:19,
    email:'steave@gmail.com',
    hobbies:['Music','sports'],
    address:{
        city:'Palitana',
        state:'GU'
    },
    getBirthYear: function(){
        return 2020-this.age;
    }
}
let val;
val=Person;
Get specific value
val=Person.firstname;
val=Person.lastname;
val=Person.age;
val=Person.address;
val=Person.address.state;
val=Person.address['city'];
val=Person.getBirthYear();
console.log(val);
const people=[
    {name:'John',age:30},
    {name:'Mike',age:30},
    {name:'Sky',age:18}
];
for(let i=0;i<people.length;i++){
    console.log(people[i]);
    console.log(people[i].name);
}
```
### Date and time
```javascript
let val;
const today=new Date();
let birthday= new Date('9-18-1981');
val=birthday;
val=today.getDate();
val=today.getMonth();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getMilliseconds();
val=today.getTime();
val=today.getSeconds();
console.log(val);
```

### Conditional Statement 
```javascript
//Equal to
const id=100;
if(id==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT')
}
Not Equal to
if(id!=100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT')
}

//EQUAL TO VALUE & TYPE
if(id===100){
    console.log('CORRECT');
}
else{   //===  Compare Type and Value
    console.log('INCORRECT')
}
if(id!==100){
    console.log('CORRECT');
}
else{   //===  Compare Type and Value
    console.log('INCORRECT')
}
TEST IF UNDEFINED
if(typeof id!=='undefined'){
    console.log(`The ID is ${id}`);
}
else{
    console.log(`NO ID`);
}

//GREATER OR LESS THAN
if(id>100)
{
    console.log('YES')
}
else{
    console.log('NO');
}

//IF ELSE
const color='RED';
if(color==='RED')
{
    console.log('Color is red');
}
else if(color==='BLUE'){
    console.log('Color is blue');
}
else{
    console.log('YELLOW')
}

//LOGICAL OPERATOR
const name='Steave';
const age=20;
//AND &&
if(age>0 && age<12)
{
    console.log(`${name} is a child`);
}else if(age>=13 && age<=19){
    console.log(`${name} is a teneger`);
}
else{
    console.log(`${name} is adult`);
}

//OR 
if(age<16 || age>65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} is registered for the race`);
}
```

### Function declaration 
```javascript
function greeting(firtsName,lastname) {
    //console.log('Hello');
    return 'Hello'+firtsName + ' '+lastname;
}
greeting();
console.log(greeting('Akash','Doe')); //Passing variable

//FUNCTION EXPRESSION
const sqaure=function(x){
    return x*x;
}
console.log(sqaure(8));

//PROPERTY METHODS
    const todo={
        add:function()
        {
            console.log('Add todo...');
        },
        edit:function(id){
            console.log(`Edit todo ${id}`);
        }
    }
    todo.delete=function(){
        console.log('Delete todo...');
    }
    todo.add();
    todo.edit(20);
    todo.delete();
    
// Function declaration

function greet() {
   console.log('Hello There')
 }

//function expression


 const speak = function () {
 console.log('Good day !')
 }

// greet() // calling or invoking fuction
// greet()
// greet()

// speak() // we can also call function multiple time
// speak()
// speak()

//function hoisting 

 /* Hoisting is a JavaScript mechanism where variables and function declarations
 are moved to the top of their scope before code execution
*/

 function greet() {
   console.log('Hello There')
 }

//Arguments & Parameters

 const speak = function (name = 'sky', time = 'night') {
  // Parameters
  console.log(`Good ${time} ${name}`)
 }

speak('jhon doe', 'Morning') // Arguments
 speak() // if we can not pass value than its log default value
 speak('jhone doe') // second argument automatic pass

// Returning value

 const calcArea = function (radius) {
   let area = 3.14 * radius ** 2
   //console.log(area)
   return area
 }
const area = calcArea(5)
console.log(area)
calcArea(5)
console.log(area)// not work bcz area has local scope

// Arraw function

 const calcArea = (radius) => {
   return 3.14 * radius ** 2
 }

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

// console.log(resultTwo)

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


// callbacks & foreach

 const myFun = (callbackFun) => {
   //do something
   let value = 50
   callbackFun(value)
 }

 myFun((value) => {
   // do something
   console.log(value)
 })

 let people = ['mario', 'luigi', 'ryu', 'shaoun', 'chun-li']

const logPerson = (person, index) => {
   console.log(`${index} - hello ${person}`)
 }

 people.forEach(logPerson)

 people.forEach((person, index) => {
   console.log(index, person)
 })

// callback function in actions

const ul = document.querySelector('.people')

let people = ['mario', 'luigi', 'ryu', 'shaoun', 'chun-li']

let html = ` `

people.forEach((person) => {
  //create html template
  html += `
    <li style="color:purple">${person}</li>
    `
})

console.log(html)

ul.innerHTML = html
```

### Ajax and XHR Methods
```javascript
document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  // Create an  XHR Object
  const xhr = new XMLHttpRequest()
  //OPEN
  xhr.open('GET', 'data.txt', true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
    }
  }

  xhr.send()
}

```

### Working with AJAX and JSON
```javascript
document.getElementById('button1').addEventListener('click', loadCustomber)
document.getElementById('button2').addEventListener('click', loadCustombers)

//Laod Single Customber
function loadCustomber(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', '/data/customber.json', true)
  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText)

      const customber = JSON.parse(this.responseText)

      const output = `
      <ul>
      <li>ID: ${customber.id}</li>
      <li>Name: ${customber.name}</li>
      <li>Company: ${customber.company}</li>
      <li>Phone: ${customber.phone}</li>
      </ul>`

      document.getElementById('customer').innerHTML = output
    }
  }
  xhr.send()
}
//Load Cutomers
function loadCustombers(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', '/data/customers.json', true)
  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText)

      const customers = JSON.parse(this.responseText)
      let output = ''

      customers.forEach(function (customer) {
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
  
        </ul>`
      })

      document.getElementById('customers').innerHTML = output
    }
  }
  xhr.send()
```

### Getting data from an External API
```javascript
document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value

  const xhr = new XMLHttpRequest()

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)

      let output = ''

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`
        })
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output
    }
  }

  xhr.send()

  e.preventDefault()
}
```
## Promise 

<img src="https://i.ibb.co/5rxBLNB/Screenshot-from-2022-03-14-09-32-13.png" alt="Screenshot-from-2022-03-14-09-32-13" border="0">

## Capturing & Bubbling

<img src="https://i.ibb.co/VHwhrm5/Screenshot-from-2022-03-14-09-28-37.png" alt="Screenshot-from-2022-03-14-09-28-37" border="0">
