# JavaScript-A-to-Z <img src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"></h2>
![](https://img.shields.io/badge/language-javascript-yellow.svg)

### In these repository you will find basic to andvance javascript Concept !!!

### 1.Print Element & Error
```javascript
console.log("Hello World");
console.error('this error');
console.warn('sdsd');
```
### 2.Variable var,let,const
>Let Re-Assign Value,Const Does not assign value
```javascript
let age=30;
age=31;
console.log(age);
const old=30;
age=31;
console.log(old);
```
### 3.Data Type String,Number,Boolean,null,undefined,Symbol
```javascript
const name='Akash';
const num=30;
const rating=4.5;
const isCoool=true;
const x=null;
const y=undefined;
let z;
console.log(typeof name);
console.log(typeof num); 
console.log(typeof rating);
console.log(typeof isCoool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
```
### 4.String Operation

#### Old Way Concatenation
```javascript
console.log('My name is'+ name +' and my age is :'+age);
```
#### New Way Template String
```javascript
const hello=`My Name is ${name} and i am ${age}`;
console.log(hello);
const s='Hello World';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
```
#### 5.Arrays -variable that hold multiple Values
```javascript
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
```
##### Array Multiple Data Type Supprt in single variabl
```javascript
const fruits=['Apple','Orange','Mango','Graps',30,40];
console.log(fruits);
```
##### You can Also Manupulate your Array
```javascript
fruits[3]='Banana';
console.log(fruits);
```
##### Array index always start with 0
```javascript
console.log(fruits[1]);
```
##### You can also PUSH Element in Array
```javascript
fruits.push('Pinaple');
```
##### Element Add in Starting
```javascript
fruits.unshift('Watermalon');
```
##### Find Index Number
```javascript
console.log(fruits.indexOf('Mango'));
```

