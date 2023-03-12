### Let and Const

```js
what is defferent between let and const
- let is block scoped
- const is block scoped
- const is immutable
- let is mutable

const name = 'John';
name = 'John';
console.log(name);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log(checkScope());

function checkPass(password) {
  'use strict';
  if (password.length < 8) {
    return 'Password must be longer than 8 characters';
  }
  if (password.search(/[a-z]/) === -1) {
    return 'Password must contain at least one lowercase character';
  }
  if (password.search(/[A-Z]/) === -1) {
    return 'Password must contain at least one uppercase character';
  }
  if (password.search(/[0-9]/) === -1) {
    return 'Password must contain at least one number';
  }
  return 'Password is valid';
}

console.log(checkPass('Adfs1afafsf'));
```
### Arrow Functions
```js
//Normal Function 
function getInfo(name, age) {
  return `${name} is ${age} years old`;
}
console.log(getInfo('John', 30));

//Arrow Function
const getInfo2 = (name, age) => `${name} is ${age} years old`;
console.log(getInfo2('John', 30));

//hosting

console.log(greeting());
console.log(name);

function greeting() {
  return 'Hey there!';
}
console.log(greeting());

const name = 'John';

console.log(greeting());
const greeting = () => 'Hey there!';

//Example : 1

var radius = 5;
const shape = {
  radius: 10,
  diameter: function () {
    return this.radius * 2;
  },
  diameter2: () => this.radius * 2,
};

console.log(shape.diameter());
console.log(shape.diameter2());

//Example : 2

const hero = {
  name: 'Spiderman',
  getName: function () {
    setTimeout(
      function () {
        console.log("Superhero's name is " + this.name);
      }.bind(this),
      1000
    );
  },
};

console.log(hero.getName());

//Example : 3 - Arrow functions

const hero = {
  name: 'Spiderman',
  getName: function () {
    setTimeout(() => {
      console.log("Superhero's name is " + this.name);
    }, 1000);
  },
};
console.log(hero.getName());
```
### Template Literals
```js
// without template literals

function sayHello(name) {
  return 'Hello ' + name;
}

console.log(sayHello('John'));

// with template literals

function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello('John'));

// Example : 1

const baseUrl = 'https:jsonplaceholder.typicode.com/users';

fetch(`${baseUrl}/1`)
  .then((response) => response.json())
  .then((users) => console.log(users));

fetch(`${baseUrl}/2`)
  .then((response) => response.json())
  .then((users) => console.log(users));

// Example : 2

const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum(1, 2));

// Example : 3

const result = 'Sarah : 1 \n Peter : 2 \n John : 3';
console.log(result);

// Example : 4

const greet = (greeting, name, age) => {
  return `${greeting} ${name}! You are ${age} years old!`;
};

const result = greet('Hello', 'John', 30);
console.log(result);
```
### Objects 
```js

// Example : 1

// ES5

function createPerson1(name, age, admin) {
  return {
    name: name,
    age: age,
    admin: admin,
  };
}

// ES6

function createPerson2(name, age, admin) {
  return {
    name,
    age,
    admin,
  };
}
console.log(createPerson1('John', 30, true));
console.log(createPerson2('Peter', 40, false));

// Example : 2

const specialProperty = 'nationality';

const person = {
  name: 'Jhone',
  age: 22,
  isAdmin: false,
};

person[specialProperty] = 'Indian';

console.log(person);

function makeObject(key, value) {
  return {
    [key]: value,
  };
}

const user = makeObject('name', 'John');
const dog = makeObject('name', 'Rover');

// Example : 3

const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

// ES6

const specialProperty = 'nationality';
const firstName = 'Jhone';
const lastName = 'Doe';

const person = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  [specialProperty]: 'Indian',
};
console.log(person);
```

### Parameters
```js
// Example : 1

function greetings(name = 'Akash') {
  console.log(`Hello ${name}`);
}

console.log(greetings('Jhone'));
console.log(greetings());

//Example : 2

function createSuperHero(name, healthPoints = 100) {
  return `${name} has ${healthPoints} health points`;
}

const superman = createSuperHero('Superman');
const batman = createSuperHero('Batman', 200);
const ironman = createSuperHero('Ironman', 300);

console.log(superman);
console.log(batman);
console.log(ironman);

// Example : 3

function addList(item, list = []) {
  list.push(item);
  return list;
}

console.log(addList('item1'));
console.log(addList('item2'));

//Example : 4

function getDate() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return `${formattedDate} ${formattedTime}`;
  }
  
  console.log(getDate());
  
  function logMessage(message = 'Hello', date = getDate()) {
    console.log(`${date}: ${message}`);
  }
  console.log(logMessage('Akash'));
  console.log(logMessage('Akash', '2020-01-01'));
  console.log(logMessage('Akash', '2020-01-01 12:00:00'));
```
### REST & SPREAD OPERATOR 
```js
//Rest Paramenter always be in last place

function sum(a, b, ...values) {
  let sum = a + b
  values.forEach(value => (sum += value))
  return sum
}
console.log(sum(2, 4, 2, 3, 5))

const user = {
  name: 'John',
  age: 30,
}

const cart = {
  items: [
    {
      product: {
        name: 'Milk',
        price: 3.5,
      },
      quantity: 2,
    },
    {
      product: {
        name: 'Bread',
        price: 2.5,
      },
      quantity: 3,
    },
  ],
}

const deliveryAddress = {
  street: 'Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
}

const order = {
  ...user,
  ...cart.items.product,
  ...deliveryAddress,
}

console.log(order)
```
