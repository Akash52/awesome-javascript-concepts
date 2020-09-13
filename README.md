# JavaScript-A-to-Z

In these repository you will find basic to andvance javascript Concept !!!

### 1.Print Element & Error
```
console.log("Hello World");
console.error('this error');
console.warn('sdsd');
```
### 2.Variable var,let,const
>Let Re-Assign Value,Const Does not assign value
```
let age=30;
age=31;
console.log(age);
const old=30;
age=31;
console.log(old);
```
### 3.Data Type String,Number,Boolean,null,undefined,Symbol
```
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
```
console.log('My name is'+ name +' and my age is :'+age);
```
#### New Way Template String
```
const hello=`My Name is ${name} and i am ${age}`;
console.log(hello);
const s='Hello World';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
```
