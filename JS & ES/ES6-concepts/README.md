# ES6-concepts-repo
Destructuring,Promises, Async Await,Spread

## Destructuring

```javascript

/*
    The destructuring assignment syntax is a JavaScript expression 
    that makes it possible to unpack values from arrays, or properties 
    from objects, into distinct variables
*/

//1.Array Destructuring

const people = ['Jhon', 'Beth', 'Mike']

//ES5

const p1 = people[0]
const p2 = people[1]
const p3 = people[2]

console.log(p1, p2, p3)

//ES6

const [person1, person2, person3] = people
//Here we Access Array element Like person1[jhon]

console.log(person1, person2, person3)

//Array Destructuring not useful Compare to Object  Destructuring

//2.Object Destructuring

const person = {
  name: 'Jhon doe',
  age: '32',
  city: 'Miami',
  gender: 'Male',
}

// Old ES5

console.log(person.name, person.age, person.city, person.gender)
//Jhon doe 32 Miami Male

//New ES6 Destructuring

const { name, age, city, gender } = person

console.log(name, age, city, gender)
//Jhon doe 32 Miami Male

```

## Promises
```javascript
/*
    The Promise object represents the eventual completion (or failure) 
    of an asynchronous operation and its resulting value
*/

/*
A Promise is in one of these states:
    -> pending: initial state, neither fulfilled nor rejected.
    -> fulfilled: meaning that the operation was completed successfully.
    -> rejected: meaning that the operation failed.
*/
```

### Examples :

```javascript

// Basic Example

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function () {
    resolve('Success!') // Yay! Everything went well!
  }, 3000)
})




myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log('Yay! ' + successMessage)
})


// second example , we used reject

const willGetYouDog = new Promise((resolve, reject) => {
  const rand = Math.random()
  console.log(rand)
  if (rand < 0.5) {
    resolve()
  } else {
    reject()
  }
})

willGetYouDog.then(() => {
  console.log('WE GOT DOG !!!')
})
willGetYouDog.catch(() => {
  console.log('NO DOG')
})
```
#### returning promises from function
```javascript

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random()
      console.log(rand)
      if (rand < 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 5000)
  })
}

makeDogPromise()
  .then(() => {
    console.log('WE GOT DOG !!!')
  })
  .catch(() => {
    console.log('NO DOG')
  })
  
  ```
  #### Fetch uses Promises
  ```javascript

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((users) => {
    console.log(users)
  })
  .catch(() => {
    console.log('No user Found')
  })
  
  ```
   #### asynchronous execution with setTimeout()
 ```javascript  
setTimeout(function () {
  console.log('Yay!')
}, 1000)

//We can re-write this code in ES6 with Promise:

var wait1000 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000)
}).then(function () {
  console.log('Yay!')
})

//Or with ES6 arrow functions:

var wait1000 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
}).then(() => {
  console.log('Yay!')
})

console.log('Hello World !')

//It can be re-written with ES6 promises like so:

var wait1000 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })

wait1000()
  .then(function () {
    console.log('Yay!')
    return wait1000()
  })
  .then(function () {
    console.log('Wheeyee!')
  })
```
## Async Await
```javascript

/*
"async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise
*/

/*
    Async/await
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
*/

//Simple Example

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000)
  })

  let result = await promise // wait until the promise resolves (*)

  alert(result) // "done!"
}

f()

// -> async ensures that the function returns a promise

// -> The keyword await makes JavaScript wait until that promise settles and returns its result

//here we call simple api

async function getUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()
  return data
}

getUsers()
  .then((data) => console.log(data))
  .catch(() => console.log(err))
```
## Spread Operator

```javascript
//Spread Operator

let array1 = ['one', 'two', 'three']
let array2 = ['Four', 'Five']

array1.push(...array2) //Adds array2 items to end of array
//console.log(array1)
array1.unshift(...array2) //Adds array2 items to Beginning of array
//console.log(array1)

//second example

let arr1 = ['two', 'three']
let arr2 = ['one', ...arr1, 'four', 'five']

//console.log(arr2)

//We can also use the spred operator with destructuring

const players = ['Kyln', 'Rmby', 'Nicole', 'Naomi', 'Jim', 'Sherry']

const [first, second, third, ...unplaced] = players

console.log(first) //Kyln
console.log(second) //Rmby
console.log(third) //Nicole
console.log(unplaced) //['Nicole', 'Naomi', 'Jim', 'Sherry']
```



