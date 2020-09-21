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
### 5.Arrays -variable that hold multiple Values
```javascript
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
```
##### Array Multiple Data Type Support in single variable
```javascript
const fruits=['Apple','Orange','Mango','Graps',30,40];
console.log(fruits);
```
##### You can Also Manipulate your Array
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
### 6.Object And Literals
```javascript
const person={
    fisrtname:'Akash',
    lastName:'Chauhan',
    age: 20,
    hobbies:['music','sports'],
    addess:{
        street:"Bhapara",
        Village:"Gheti",
        state:"Gujarat"
    }
}
console.log(person);
```
##### You can Also Acces Separate Value

```javascript
console.log(person.fisrtname,person.lastName); 
console.log(person.hobbies[1]);
console.log(person.addess.Village);
```

#### You can Add New Property 
```javascript
person.email='ac8572611@gmail.com';
console.log(person);
```
### 7.Using Array Todo LIST
```javascript
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Program Done',
        isCompleted:true
    },
    {
        id:3,
        text:'JAVASCRIPT',
        isCompleted:false
    },

];

console.log(todos);

console.log(todos[0].text);
```
### 8.Loops

#### For Loops
```javascript
for(let i=0;i<5;i++)
{
    console.log(`For loop number:${i}`);
}
```
#### While Loop
```javascript
let i=0;
while(i<10)
{
    console.log(`whilw loop no:${i}`);
    i++;
}
```

### 9.Compare == & ===
```javascript
const c='10';

if(c===10)
{
    console.log('x is 10');
}
const d=10;
if(d==10)
{
    console.log('d is 10');
}
```

### 10.Terniary Operator 
```javascript
const e=11;
const color =e>10?'red':'blue';
```

### 11.Switch Statement
```javascript
switch(color)
{
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue ');
            break;
}
```
### 12. function
```javascript

function addSum(num1,num2){
    console.log(num1+num2);
}
addSum(5,7)
```

### 13. Arrow Function
```javascript
const Addsum=(n1,n2)=>{
    console.log(n1+n2);
}
Addsum(5,8);
```
## 14.Consructor function
```javascript
function Person(Fisrtname,LastName,Dob){
    this.Fisrtname=Fisrtname;
    this.LastName-LastName;
    this.Dob=new Date(Dob);

}
```
### 15.Instantiate object 
```javascript
const p1=new Person('Akash','Chauhan','15-08-200');
const p2=new Person('Jigar','Chauhan','3-6-2000');
console.log(p1);
console.log(p2.Dob.getFullYear());
```
### 16.Class
```javascript
class P3{
    constructor(Fisrtname,LastName,Dob){
    this.Fisrtname=Fisrtname;
    this.LastName-LastName;
    this.Dob=new Date(Dob);
    }

    getBirthYear(){
       return this.Dob.getFullYear();

    }
    getFullYear() 
    {
        return this.getFullYear();
    }
}
```

## //DOM (Document object Model)

### 1.Single Element Selector
```javascript
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
```
### 2.Multiple Element Selector
```javascript
console.log(document.querySelectorAll('.item'));
```
### 3.Work with Event
```javascript
const btn=document.querySelector('.btn');
btn.style.background="red";

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
        console.log('click')
});
```

### 4.Work with form
```javascript
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML="Please Enter all fields";

        setTimeout(()=>msg.remove(),3000);
    }
    else{

        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value='';
        emailInput.value='';
    }
   
}
```
